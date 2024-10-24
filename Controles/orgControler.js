

const { gendrateUniqueid } = require('../Utils/idGen');
const organization = require('../Tables/organization');
const bycript = require('bcrypt');
const mailer = require('nodemailer');
const upload = require('../Utils/fileUpload');
const { findOne } = require('../Tables/idGendratore');
// const { json } = require('express');
// const { use } = require('passport');





exports.regOrg = async (req, res, tab, uni) => {
    try {

        const email = await tab.findOne({ email: req.body.email });
        if (email) {
            return res.status(404).json({ mess: "email already exists" })
        }

        const phone = await tab.findOne({ phoneNo: req.body.phoneNo });
        if (phone) {
            return res.status(404).json({ mes: "phoneNo alerady exists" });
        }

        if (req.body.password) {

            var hashPass = await bycript.hash(req.body.password, 10);
        }

        const orgId = await gendrateUniqueid(uni);
        const body = { ...req.body, uniqId: orgId, password: hashPass };
        const newOrg = new tab(body);
        const org = await newOrg.save();

        return res.status(200).json({ mes: ' create succesfully', data: org });
    } catch (error) {

        console.log(error);
        return res.status(500).json(error)

    }
}

exports.login = async (req, res, tab) => {

    const { email, password } = req.body;
    try {
        const user = await tab.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ mes: "user Not Found" });
        }

        const passMatch = await bycript.compare(password, user.password);

        if (!passMatch) {
            return res.status(404).json({ mes: "incorect password" });
        }
        return res.status(200).json({ mes: "Login Sucessfully " })
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)

    }

}

exports.updateOrg = async (req, res, tab) => {
    const orgId = req.params.id;
    try {

        if(req.body.phoneNo){

            const phone = await tab.findOne({ phoneNo: req.body.phoneNo });
            if (phone) {
                return res.status(404).json({ mes: "phoneNo alerady exists" });
            }
        }
        const updateted = await tab.findOneAndUpdate({ uniqId: orgId }, req.body, { new: true });

        if (!updateted) {
            return res.status(404).json({ mes: "User Not Found" });
        }

        return res.status(200).json({ mes: "Update Sucessfully" })

    } catch (error) {
        console.log(error, 'err');
        return res.status(200).json(error)

    }

}

exports.forgotPass = async (req, res, tab) => {
    const userEmail = req.body;
    try {
        randomotp = Math.floor(1000 + Math.random() * 8999);

        const user = await tab.findOneAndUpdate(userEmail, { otp: randomotp }, { new: true });
        if (!user) {
            return res.status(400).json({ mes: "email not fount" });
        }

        // return res.send(user)

        const body = ` <div style="width: 300px; background-color: white; border-radius: 10px; padding: 20px; text-align: center; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);">
            <div style="color:#fdd835">
               <h1>${user.orgName}</h1>
            </div>
            <div style="margin-bottom: 20px;">
                <img src="https://cdn.dribbble.com/users/3821672/screenshots/7172846/otp.gif" alt="Lock Icon" style="width: 130px; height: 100px; border-radius:8px">
            </div>
            <h2 style="color: #333333; margin-bottom: 10px;">Verify OTP</h2>
            <p style="color: #777777; font-size: 14px;">Don't share your OTP</p>
            <div style="background-color:#fdd835; padding: 10px 20px; border-radius: 5px; font-size: 24px; font-weight: bold; color: black; margin: 20px 0;">
                ${randomotp}
            </div>
            <p style="color: #777777; font-size: 12px;">If you didn’t request to change your password, simply ignore this email.</p>
        </div>
        `

        let transport = mailer.createTransport({
            service: "gmail",
            auth: {
                user: "saarapaambu65@gmail.com",
                pass: "prcg mdom lpee jexf"
            }
        });

        let mailOption = {
            from: 'saarapaambu65@gmail.com',
            to: 'github437@gmail.com',
            subject: ' Your OTP',
            text: `Hello!..${user.orgName}`,
            html: body
        };

        transport.sendMail(mailOption, (error, info) => {
            if (error) {
                console.log(`error${error}`);
                return res.status(400).json(error);
            }
            return res.status(200).json({ mess: "email send sucessfully" })
        })

        setTimeout(async () => {
            await tab.findOneAndUpdate(userEmail, { otp: null }, { new: true });
        }, 120000);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error)

    }
};

exports.otpVerfy = async (req, res, tab) => {

    try {
        const reciveOtp = req.body.otp;

        const user = await tab.findOne({ uniqId: req.params.id });

        if (user.otp == reciveOtp) {
            return res.status(200).json({ mes: "verify Sucessfully" });
        }
        return res.status(400).json({ mes: "invalide OTP " });

    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.resetPass = async (req, res, tab) => {

    try {
        const hashedPass = await bycript.hash(req.body.password, 10)

        const editPass = await tab.findOneAndUpdate({ uniqId: req.params.id }, { password: hashedPass }, { new: true });

        if (!editPass) {
            return res.status(400).json({ mess: "invalide user" });
        }
        return res.status(200).json({ mes: "password changed succesfully" })
    } catch (error) {

    }

}
exports.logo = async (req, res, tab, logo) => {

    try {

        const user = await tab.findOne({ uniqId: req.params.id });
        if (!user) {
            return res.status(400).json({ mes: "user Not found" });
        };

        upload.single(logo)(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }

            user.logo = req.file ? `/uploads/${req.file.filename}` : null;
            await user.save();

            res.status(200).json({ mes: "image upload sucessfully", data: user });

        });

    } catch (error) {

        return res.status(500).json(error)

    }
};
