const express= require('express');
const { GetContact, CreatContact, userDelete, userDeleteall } = require('../controllers/controllers');

const contactRouter =express.Router();

contactRouter.get('/',GetContact);


contactRouter.post('/',CreatContact);

contactRouter.delete('/:id',userDelete)
 
contactRouter.delete('/',userDeleteall)     
module.exports =contactRouter