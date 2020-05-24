const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        avatar: {
            type: String
        }
    },
    {
        //*Assign createdAt and updateAt fields with a Date type
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;