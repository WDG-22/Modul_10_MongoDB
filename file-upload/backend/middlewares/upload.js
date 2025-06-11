import multer from 'multer';
import CloudinaryStorage from '../services/cloudinary.js';

// const upload = multer({ dest: 'uploads/' });

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
//   },
// });
// multer.memoryStorage();

const storage = new CloudinaryStorage();

const allowedFormats = ['png', 'jpg', 'jpeg', 'svg', 'webp', 'heic', 'avif'];

const fileFilter = (req, file, cb) => {
  const fileExt = file.mimetype.split('/')[1];

  // if (file.mimetype.startsWith('image/')) {
  if (allowedFormats.includes(fileExt)) {
    cb(null, true);
  } else {
    cb(new Error('File type not allowed', { cause: 400 }));
  }
};

const fileSize = 1_048_576 * 2; // 2mb

const upload = multer({ storage, fileFilter, limits: { fileSize } });

export default upload;
