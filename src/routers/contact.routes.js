const Router= require('express') .Router();
    const controller= require('../controllers/contact.controller');

Router.post('/', controller.storeContact);

Router.get('/', controller.getAllContacts);
module.exports = Router 

