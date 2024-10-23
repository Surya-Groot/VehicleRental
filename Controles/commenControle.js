const { gendrateUniqueid } = require("../Utils/idGen");



// add
exports.createItem = async (req, res, tab, uniq) => {
    try {
        const uniId = await gendrateUniqueid(uniq)
        console.log(uniId);

        const newItem = new tab({ uniqId: uniId, ...req.body });
        const savedItem = await newItem.save();
        res.status(201).json({ data: savedItem });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All 
exports.getAllItems = async (req, res, tab) => {
    try {
        // const phone = {orgName:"guy"};
        // const total = await tab.countDocuments()
        // console.log(total);
        const items = await tab.find();
        res.status(200).json({ data: items });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get Single
exports.getItemById = async (req, res, tab) => {
    try {

        const item = await tab.findOne({ uniqId: req.params.id });

        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ data: item });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update 
exports.updateItem = async (req, res, tab) => {
    try {
        const updatedItem = await tab.findOneAndUpdate({ uniqId: req.params.id }, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ data: updatedItem });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete 
exports.deleteItem = async (req, res, tab) => {

    const id = req.params.id;
    try {
        const deletedItem = await tab.findOneAndDelete({ uniqId: id });
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
