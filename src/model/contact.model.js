const mongoose = require('mongoose');
const Contact = mongoose.Schema

// Define the schema for a contact
const Contactform=new Contact({
    nombre: String,
    email: String,
    mensaje: String,
})

module.exports = mongoose.model('contactform', Contactform);

