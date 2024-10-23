

// // googleRout.js
// const express = require('express');
// const passport = require('passport');
// const  route = express.Router();

// route.get('/', (req, res) => {
//     res.send(`<a href="/auth/google">Sign In</a>`);
// });

// route.get('/auth/google', 
//     passport.authenticate('google', { scope: ['email', 'profile'] })
// );

// route.get('/google/callback', 
//     passport.authenticate('google', { 
//         successRedirect: '/logined',
//         failureRedirect: '/failed' 
//     })
// );

// route.get('/logined', (req, res) => {
//     if (req.isAuthenticated()) {                 
//         res.send(`Hello, ${req.user.displayName},  <a href="/logout">logOut</a>`);
//     } else {
//         res.redirect('/'); 
//     }
// });

// route.get('/failed', (req, res) => {
//     res.send('Login failed');
// });

// route.get('/logout', (req, res, next) => {
//     req.logout(err => {
//         if (err) {
//             return next(err);
//         }
//         res.redirect('/'); 
//     });
// });

// module.exports = route;
