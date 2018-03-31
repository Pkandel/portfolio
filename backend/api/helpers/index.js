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
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    //check ext
    const extname = filetypes.test(path.extname(file.originalname).toLocaleLowerCase());
    // check mime
    const mimeType = filetypes.test(file.mimetype);
    if(extname && mimeType){
      // accept a file
      return cb(null, true)
    } else {
      // reject a file
      return cb('Valid images types are jpeg, jpg, png and gif', false);
    }
  }
})

const upload = multer ({
 storage,
 fileSize: 1024 * 1024 * 3
});

export { loadENV, upload };

