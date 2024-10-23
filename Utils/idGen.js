const idGendrator = require('../Tables/idGendratore');

exports.gendrateUniqueid = async (prefix) => {
    const result = await idGendrator.findOneAndUpdate(
        { tableType: prefix },
        { $inc: { lastid: 1 } },
        { new: true, upsert: true }
    );
    const id = `${prefix}${String(result.lastid).padStart(3, '0')}`;
    return id;
};
