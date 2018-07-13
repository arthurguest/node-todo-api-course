const mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        requried: true,
        minLength: 3,
        trim: true
    }
});

module.exports = {
    User
};