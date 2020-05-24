//*Combine our models into a single JS module
//?Good pattern to follow because database models grow
const Note = require('./note');
const User = require('./user');

const models = {
    Note,
    User
};

module.exports = models;