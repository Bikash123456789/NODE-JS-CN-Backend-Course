// 1. Import multer.
import multer from "multer";
import fs from "fs";
import path from "path";

// // Ensure the uploads directory exists
// const uploadsDir = "./uploads";
// if (!fs.existsSync(uploadsDir)) {
//   fs.mkdirSync(uploadsDir, { recursive: true });
// }

// 2. Configure storage with filename and location.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const safeDateString = new Date().toISOString().replace(/:/g, "-");
    cb(null, `${safeDateString}-${file.originalname}`);
  },
});

export const upload = multer({
  storage: storage,
});
