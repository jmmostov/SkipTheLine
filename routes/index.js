const express = require('express');
const router = express.Router();

const newUserController = require('../controller/newUser')
const storeUserController = require('../controller/storeUser')
const homeController = require('../controller/homeController')
const loginController = require('../controller/loginController')
const loginUserController = require('../controller/loginUser')
const adminLoginController = require('../controller/getRegisterLinestander')
const storeLinestanderController = require('../controller/storeLinestander')
const updateDataAdminController = require('../controller/updateDataForAdmin')
const logoutController = require('../controller/logoutController')

/* GET home page. */
router.get('/', homeController)

//Router to Register page
router.get('/register', newUserController)
router.post('/users/register', storeUserController)

//Router to Login page
router.get('/login',loginController)
router.post('/users/login', loginUserController)

//router to admin login page
router.get('/registerLinestander', adminLoginController)
router.post('/users/registerLinestander', storeLinestanderController)

router.post('/update',updateDataAdminController)

//Router to logout page
router.get('/logout', logoutController)

module.exports = router;