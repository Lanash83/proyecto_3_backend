const ContactModel = require('../models/contact.model');

const ContactController = {
    getAllContacts: async (req, res) => {
        try {
            const contacts = await ContactModel.find();
            res.status(200).json(contacts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    storeContact : async (req, res) => {
        const newContact = new ContactModel(req.body);
        await newContact.save();
        res.status(200).json(newContact);
    }
}

module.exports = ContactController;

