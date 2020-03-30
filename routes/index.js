const express = require('express');
const router = express.Router();

const newUserController = require('../controller/newUser')
const storeUserController = require('../controller/storeUser')
const homeController = require('../controller/homeController')
const loginController = require('../controller/loginController')
const loginUserController = require('../controller/loginUser')
const adminLoginController = require('../controller/getRegisterLinestander')
const storeLinestanderController = require('../controller/storeLinestander')
const getDataAdminController = require('../controller/getDataForAdmin')
const updateDataAdminController = require('../controller/updateDataForAdmin')

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

//admin routers
router.get('/get-data', getDataAdminController)

router.post('/update',updateDataAdminController)

module.exports = router;