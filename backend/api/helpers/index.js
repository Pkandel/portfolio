import fs from 'fs';
import multer from "multer";
import path from 'path';

// this function handle the returning respose
function loadENV(path) {
  const data = fs.readFileSync(path).toString().split('\n');
  data.forEach((item) => {
    const env = item.split('=');
    const [key, value] = env;
    process.env[key] = value;
  });
}
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../public/api/uploads') ) 
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer ({
 storage
});

export { loadENV, upload };

