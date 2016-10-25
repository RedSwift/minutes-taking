'use strict'
const User = require('../model/user');

let register = function (req, res) {
    if (req.body.password !== req.body.passwordCfm) return res.status(400).json({errors: 'Password does not match!'});
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    
    newUser.save(function(err, result) {
        if (err) return res.status(400).json({errors: err});
        else return res.status(200).json(result);
    });
};

module.exports = {
    register: register
};