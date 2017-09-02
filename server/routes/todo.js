'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/todocontroller')
const auth = require('../helpers/auth')
const jwt = require('jsonwebtoken');
require('dotenv').config()


router.post('/list', auth.auth, controller.addtodo);

router.get('/list', auth.auth, controller.listtodo);

router.delete('/list/:id', auth.auth, controller.deletetodo);

router.patch('/list/:id', auth.auth, controller.updatetodo);

// tag

router.post('/tag', auth.auth, controller.addtag);

router.get('/tag', auth.auth, controller.listtag);

router.patch('/tag/:id', auth.auth, controller.updatetag);

router.delete('/tag/:id', auth.auth, controller.deletetag);

router.patch('/addtodo', auth.auth, controller.addtodototag);



module.exports = router;