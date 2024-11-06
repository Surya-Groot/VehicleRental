const { gendrateUniqueid } = require("../Utils/idGen");
const upload = require("../Utils/fileUpload");
const fs = require('fs');
const path = require('path');


// add
exports.createItem = async (req, res, tab, uniq) => {
    try {
        // Generate a unique ID based on the 'uniq' parameter
        const uniId = await gendrateUniqueid(uniq);
        // Create a new instance of the specified table model with the unique ID and request body data
        const newItem = new tab({ uniqId: uniId, ...req.body });
        // Save the new item to the database
        const savedItem = await newItem.save();
        // Send a success response with the saved item data
        res.status(201).json({ data: savedItem });
    } catch (err) {
        // Send an error response with the error message
        res.status(400).json({ error: err.message });
    }
};

// Get All 
exports.getAllItems = async (req, res, tab) => {
    try {
        // Fetch all items from the database using the provided table model
        const items = await tab.find();
        // Send a success response with the retrieved items
        res.status(200).json({ data: items });
    } catch (err) {
        // Send an error response with the error message in case of failure
        res.status(500).json({ error: err.message });
    }
};

// Get Single
exports.getItemById = async (req, res, tab) => {
    try {
        // Find the item in the specified table model using the unique ID from request parameters
        const item = await tab.findOne({ uniqId: req.params.id });
        // If the item is not found, send a 404 error response
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        // If found, send a success response with the item data
        res.status(200).json({ data: item });
    } catch (err) {
        // Send an error response with the error message if something goes wrong
        res.status(500).json({ error: err.message });
    }
};

// Update 
exports.updateItem = async (req, res, tab) => {
    try {
        // Find the item by unique ID and update it with data from the request body
        const updatedItem = await tab.findOneAndUpdate(
            { uniqId: req.params.id },
            req.body,
            { new: true }
            // The 'new: true' option returns the updated item instead of the original
        );
        // If no item is found, send a 404 error response
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        // If updated successfully, send a success response with the updated item data
        res.status(200).json({ data: updatedItem });
    } catch (err) {
        // Send an error response with the error message if the update fails
        res.status(400).json({ error: err.message });
    }
};

// Delete 
exports.deleteItem = async (req, res, tab) => {
    const id = req.params.id;
    try {
        // Find and delete the item by unique ID in the specified table model
        const deletedItem = await tab.findOneAndDelete({ uniqId: id });
        // If no item is found, send a 404 error response
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        // If deleted successfully, send a success message
        res.status(200).json({ message: 'Item deleted successfully' });        
    } catch (err) {
        // Send an error response with the error message if deletion fails
        res.status(500).json({ error: err.message });
    }
};

// file Upload

exports.imgUpload = async (req, res) => {

    try {
        const folder = req.params.folder;  // Dynamic folder name 
        // Define the base directory
        const baseUploadDir = path.join(__dirname, '..', 'uploads');
        // Check if the specific folder exists, if not create it
        const specificDir = path.join(baseUploadDir, folder);
        if (!fs.existsSync(specificDir)) {
            fs.mkdirSync(specificDir, { recursive: true });
        }
        // Use multer to handle the file upload to the dynamic folder
        upload.single('img')(req, res, (err) => {
            if (err) {
                return res.status(400).json({ message: "Error uploading image", error: err });
            }
            // If successful, return the image path
            const imagePath = `${req.protocol}://${req.get('host')}/uploads/${folder}/${req.file.filename}`;
            return res.status(200).json({ message: "Image uploaded successfully", path: imagePath });
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error.message });
    }
}