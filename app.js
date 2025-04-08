import express from 'express';
import { setup } from './src/config/dbConnect.js';
import router from './src/routes/route.js';
// import sysAdminRouter from './src/routes/sysAdminRoute.js';
import globalErrorHandler from './src/error/globalErrorHandler.js';
import httpStatus from 'http-status';
import path from 'path';
import cors from 'cors'
import { fileURLToPath } from 'url';
import { getImage } from './src/controller/assetsController.js';

// Create __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const app = express();
app.use(cors())
app.use(express.json());

// Serve static files from the 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/v1', router);
app.get("/uploads/*/:imagename",getImage)
// app.use("/api/v1/system-admin", sysAdminRouter);
app.use(globalErrorHandler);
app.get("/", (req, res) => {
  res.send("server is okay");
});

app.use((req, res, next) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

app.listen(4000, async () => {
  console.log("server is listening at port 4000");

  await setup();
});
