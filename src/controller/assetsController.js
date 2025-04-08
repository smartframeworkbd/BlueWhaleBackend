import catchAsync from "../shared/catchAsync.js";
import sharp from "sharp";
import fs from "fs";
import path from "path";

const baseUploadDir = "uploads";
if (!fs.existsSync(baseUploadDir)) {
  fs.mkdirSync(baseUploadDir, { recursive: true });
}

const processImage = async (buffer, originalname, folderPath, folderUrl) => {
  const timestamp = Date.now();
  const baseName = path.parse(originalname).name;
  const fileName = `image_${timestamp}-${baseName}.webp`;
  const filePath = path.join(folderPath, fileName);

  // Ensure directory exists
  fs.mkdirSync(folderPath, { recursive: true });

  // Process Image
  await sharp(buffer).resize(680).toFormat("webp", { quality: 80 }).toFile(filePath);

  return {
    filename: fileName,
    imageUrl: `${folderUrl}/${fileName}`,
  };
};

export const imageUpload = catchAsync(async (req, res) => {
  const folder = req.body.folder || "default";
  const folderPath = path.join(baseUploadDir, folder);
  const folderUrl = `${req.protocol}://${req.get("host")}/uploads/${folder}`;

  let uploadedFiles = [];
  if (req.files && req.files.length > 0) {
    uploadedFiles = await Promise.all(
      req.files.map(async (file) => await processImage(file.buffer, file.originalname, folderPath, folderUrl))
    );
  }

  res.json({
    status: "Success",
    folderUrl,
    images: uploadedFiles,
  });
});


export const getImage=catchAsync(async(req,res)=>{

    const { imagename } = req.params;
    let { width, height, quality, format } = req.query;


    let folder = req.params[0]; 


    if (!folder) {
        return res.status(400).json({ message: "Folder path is required" });
    }


    width = width ? parseInt(width) : null;
    height = height ? parseInt(height) : null;
    quality = quality ? parseInt(quality) : 90;
    format = format ? format.toLowerCase() : "jpeg";

    const imagePath = path.join(baseUploadDir, folder, imagename);

    if (!fs.existsSync(imagePath)) {
        return res.status(404).send("Image not found");
    }


        let image = sharp(imagePath).resize(width, height);

        if (format === "webp") {
            res.setHeader("Content-Type", "image/webp");
            image = image.webp({ quality });
        } else {
            res.setHeader("Content-Type", "image/jpeg");
            image = image.jpeg({ quality });
        }

        image.pipe(res);
    
})