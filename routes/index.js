var express = require('express');
var router = express.Router();

const newUserController = require('../controller/newUser')
const storeUserController = require('../controller/storeUser')
const homeController = require('../controller/homeController')
const loginController = require('../controller/loginController')
const logoutController = require('../controller/logoutController')

/* GET home page. */
router.get('/', homeController)

//Router to Register page
router.get('/register', newUserController)
router.post('/users/register', storeUserController)

//Router to login page
router.get('/login', loginController)

//Router to logout page
router.get('/logout', logoutController)

module.exports = router;