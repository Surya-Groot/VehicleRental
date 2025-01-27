
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Base directory for uploads
const uploadDir = path.join(__dirname, '..', 'uploads');

// Ensure the base directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const folder = req.params.folder || 'public'  // This will come from the URL parameter (e.g., 'user')
        const specificDir = path.join(uploadDir, folder);
        // Check if the folder exists, if not, create it
        if (!fs.existsSync(specificDir)) {
            fs.mkdirSync(specificDir, { recursive: true });
        }
        // Set the destination path dynamically
        cb(null, specificDir);
    },
    filename: (req, file, cb) => {
        // Generate a unique filename using `req.params.id` if available; otherwise, use a timestamp
        const uniqueName = (req.params.id ? `${req.params.id}-` : '') + Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

// File filter for allowed file types (images)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const isMimeTypeValid = allowedTypes.test(file.mimetype);
    const isExtnameValid = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    if (isMimeTypeValid && isExtnameValid) {
        cb(null, true);
    } else {
        cb(new Error('Only images and PDFs are allowed'));
    }
};

// Create multer upload middleware with storage and file filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload;


