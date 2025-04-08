import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Access folderPath from req.body before multer processes the file
        const folderPath = req.body.folderPath || '';
        
        // Create full upload path
        const uploadPath = path.join('uploads', folderPath);
        
        // Create directory if it doesn't exist
        fs.mkdirSync(uploadPath, { recursive: true });
        
        console.log('Folder Path1:', folderPath);
        console.log('Upload Path1:', uploadPath);
        
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx|xls|xlsx|zip|mp4|mp3/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (extname && mimetype) {
        cb(null, true);
    } else {
        cb(new Error('Only images, documents, videos, audios, and archives are allowed!'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 100 * 1024 * 1024 }
});

export default upload;