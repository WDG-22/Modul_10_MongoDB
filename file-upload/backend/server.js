import express from 'express';
import cors from 'cors';
import upload from './middlewares/upload.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('uploads'));

app.get('/', (req, res) => {
  res.send('Running');
});

app.post('/file-upload', upload.single('image'), (req, res) => {
  // console.log(req.body);
  console.log(req.file);

  // const location = `${req.protocol}://${req.host}/${req.file.filename}`;

  res.json({ message: 'File upload successful', location: req.file.secure_url });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.cause || 500).json({ error: err.message });
});

app.listen(port, () => console.log(` File Upload Server listening on port ${port} `));
