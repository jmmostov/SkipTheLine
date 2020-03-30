const express = require('express');
const router = express.Router();

const newUserController = require('../controller/newUser')
const storeUserController = require('../controller/storeUser')
const homeController = require('../controller/homeController')
const loginController = require('../controller/loginController')
const loginUserController = require('../controller/loginUser')
const adminLoginController = require('../controller/getRegisterLinestander')
const storeLinestanderController = require('../controller/storeLinestander')
//const getDataAdminController = require('../controller/getDataForAdmin')
const updateDataAdminController = require('../controller/updateDataForAdmin')
const logoutController = require('../controller/logoutController')

//products:
const productGET = require('../controller/productGET');
const productPOST = require('../controller/productPOST');



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
//router.get('/get-data', getDataAdminController,)

router.post('/update',updateDataAdminController)

//products:
// We try to show all products from the database.
router.get('/products',productGET);

// We try to post the newly added product to the database.
router.post('/product/new',productPOST);


module.exports = router;

//Router to logout page
router.get('/logout', logoutController)