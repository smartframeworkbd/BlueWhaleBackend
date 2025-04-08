import express from 'express';
import userRoute from './userRoute.js';
import adminRouter from './adminRoute.js';
import faqRoute from './faqRoute.js';
import hotspotRouter from './hotspotRoute.js';
import breakingNewsRoute from './breakingNewsRoute.js';
import welcomeSectionRoute from './welcomSectionRoute.js';
import footerRoute from './footerRoute.js';
import headerRouter from './headerRoute.js';
import contentRoute from './contentRoute.js';
import upload from '../shared/upload.js';
import emailTemplateRoute from './emailTemplateRoute.js';
import productCategoryRouter from './productCategoryRoute.js';
import productRouter from './productRoute.js';
import imageRoute from './imageRoute.js';
import testimonialRoute from './testimonialRoute.js';
import bannerRouter from './bannerRoute.js';
// import { footerController } from '../controller/footerController.js';



const router = express.Router();

// Define the route files array
const routeConfigs = [
  { path: '/users', route: userRoute },
  {
    path: '/admin', route: adminRouter
  },
  {
    path: '/faq', route: faqRoute
  },
  {
    path: '/hotspot', route: hotspotRouter
  },
  {
    path: '/breaking-news', route: breakingNewsRoute
  },
  {
    path: '/welcome-section', route: welcomeSectionRoute
  },
  ,
  {
    path: '/footer', route: footerRoute
  },
  {
    path: '/header', route: headerRouter
  },
  {
    path: '/content', route: contentRoute
  },
  {
    path: '/email', route: emailTemplateRoute
  }
  ,
  {
    path: '/product-category', route: productCategoryRouter
  },
  ,
  {
    path: '/product', route: productRouter
  },
  {
    path: '/testimonial', route: testimonialRoute
  },
  {
    path: '/banners', route: bannerRouter
  },
  {
    path:'/uploads',route:imageRoute
  }




];

// Map through the route configurations and register routes
routeConfigs.map(({ path, route }) => {
  router.use(path, route);
});

router.post('/upload', (req, res, next) => {
  console.log("req");



  // We need to handle the folderPath before the file upload
  // Use multer's .none() middleware to parse the form data first
  // upload.no()(req, res, (err) => {
  //     if (err) {
  //       console.log(err,"er");

  //         return res.status(400).json({ message: err.message });
  //     }

  //     console.log("Initial form data:", req.body);

  //     // Now handle the file upload
  //     const isMultiple = req.query.type === 'multiple';
  const uploadHandler = upload.any()
  uploadHandler(req, res, (err) => {
    if (err) {
      console.log("Upload error:", err);
      return res.status(400).json({ message: err.message });
    }

    const folderPath = req.body.folderPath || '';
    const folderUrl = `${req.protocol}://${req.get('host')}/uploads/`;

    // console.log("Folder Path:", folderPath);

    // Prepare files response data
    const filesUploaded = req.files ? req.files.map(file => ({
      filename: file.filename,
      fileUrl: `${folderUrl}/${file.filename}`,
      data: file
    })) : [{
      filename: req.file.filename,
      fileUrl: `${folderUrl}/${req.file.filename}`,
      data: req.file
    }];

    res.status(200).json({
      status: 'Success',
      folderUrl: folderUrl,
      files: filesUploaded,
    });
  });
  // });
});


export default router;
