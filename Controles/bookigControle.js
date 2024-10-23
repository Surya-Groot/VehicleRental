
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