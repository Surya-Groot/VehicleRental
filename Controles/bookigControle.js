
const vehicle = require('../Tables/booking');

exports.bookingFilter = async (req, res) => {

    try {
        const stDate = new Date(req.body.startDate);
        const sMonth = stDate.getMonth() + 1;
        const sYear = stDate.getFullYear();
        const sDate = stDate.getDate();

        const book = await vehicle.find({

            $expr: {
                $and: [
                    { $eq: [{ $month: "$startDate" }, sMonth] },
                    { $eq: [{ $year: "$startDate" }, sYear] }
                ]
            }
        });

        book ? res.status(200).json({ data: book }) : null


    } catch (error) {
        console.log(error);

    }

}

exports.vehiFillter = async (req, res) => {
    try {
        const { vType, vModel, max, min } = req.body;

        let query = {};

        console.log("Request Body:", req.body);

        if (vType) query.vType = vType;
        if (vModel) query.vModel = vModel;

        const minPrice = min ? Number(min) : undefined;
        const maxPrice = max ? Number(max) : undefined;

        if (minPrice !== undefined && maxPrice !== undefined) {
            query.priceDay = { $gte: minPrice, $lte: maxPrice };
        }

        console.log("Constructed Query:", query);  
        const vehicles = await vehicle.find({
            vType: 'SUV',
            vModel: 'Fortuner',
            priceDay: { '$gte': 30, '$lte': 10000 }
        });
        console.log(vehicles);

        return res.status(200).json({ data: vehicles });

    } catch (error) {
        return res.status(500).json(erroe);
    }
}