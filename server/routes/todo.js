'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/todocontroller')
const auth = require('../helpers/auth')
const jwt = require('jsonwebtoken');
require('dotenv').config()


router.post('/add', auth.auth, controller.addtodo);

router.post('/tag', auth.auth, controller.addtag);

router.get('/', auth.auth, controller.listtodo);

router.patch('/:id', auth.auth, controller.updatetodo);

router.delete('/:id', auth.auth, controller.deletetodo);



module.exports = router;