const fs = require('fs');
const path = require('path');
const multer = require('multer');

const uploadDir = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,uploadDir );
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowType = /jpeg|jpg|png|pdf/;
    const mimeType = allowType.test(file.mimetype);
    const extname = allowType.test(path.extname(file.originalname).toLowerCase());

    if (mimeType && extname) {
        return cb(null, true);
    } else {
        cb(new Error('only images and pdf only allowed'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


module.exports = upload;




