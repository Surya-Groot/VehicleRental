

// const vechical = require('../Tables/vechicle');
// const feature = require('../Tables/features');
// const { gendrateUniqueid } = require('../Utils/idGen');


// exports.addVehilce = async (req, res) => {

//     try {

//         const vechiNo = await vechical.findOne({ regNo: req.body.regNo });
//         if (vechiNo) {
//             return res.status(404).json({ mes: 'regNo allredy exists' });
//         }
//         const vId = await gendrateUniqueid('VHI')
//         const fId = await gendrateUniqueid('FUT');

//         const vehi = new vechical({ uniqId: vId, featureId: fId, ...req.body });
//         const addvehi = await vehi.save();


//         const fute = new feature({ uniqId: fId, vehiId: vId, ...req.body });
//         const addfut = await fute.save();
//         return res.status(200).json({ vdata: addvehi, fdata: addfut })


//     } catch (error) {
//         console.log(error);

//         return res.status(500).json(error);
//     }
// }

// exports.update = async (req, res) => {
//     try {
//         const vData = await vechical.findOneAndUpdate({ uniqId: req.params.id }, req.body, { new: true });
//         if (!vData) {
//             return res.status(404).json({ mes: "invalide vehicle ID" });
//         }
//         const fData = await feature.findOneAndUpdate({ vehiId: req.params.id }, req.body, { new: true });

//     } catch (error) {

//     }
// }