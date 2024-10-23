// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// require('dotenv').config();
// const organization = require('../Tables/organization');
// const { gendrateUniqueid } = require('./idGen');

// passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,   // Use environment variable
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Use environment variable
//     callbackURL: "http://localhost:7000/google/callback",
//     passReqToCallback: true
// },
//     async function (request, res, accessToken, refreshToken, profile, done) {
//         console.log(profile);

//         try {
//             const user = await organization.findOne({ email: profile.email });
//             if (!user) {
//                 const orgId = await gendrateUniqueid('ORG');
//                 user = await organization.create({
//                     uniqId: orgId,
//                     ownerName: profile.displayName,
//                 });
//             } else {
//                 res.status(400).json({ mes: "email already exists" });
//                 return res.send('email already exists');
//             }
//             return done(null, user);
//         } catch (error) {
//             // Handle error
//         }
//         return done(null, profile);
//     }
// ));

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });
