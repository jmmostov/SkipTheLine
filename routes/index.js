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
const deleteAdminController = require('../controller/deleteDataAdmin')
const orderGET = require('../controller/orderGET');
const orderSTORE = require('../controller/orderSTORE');
const orderHistory = require('../controller/orderHistory');
const lineStanderGET = require('../controller/lineStanderGET');
const errorPage = require('../controller/errorPage');
const adminUserController = require('../controller/getAdminUser');
const adminProductsController = require('../controller/adminProducts')
const adminDeleteProductsController = require('../controller/deleteProducts')


// PRODUCTS:
const productGET = require('../controller/productGET');
const productPOST = require('../controller/productPOST');

// LINEITEM:
const lineItemSTORE = require('../controller/lineItemSTORE');
const lineItemGET = require('../controller/lineItemGET');

// LINESTANDER:
const lineStanderChange = require('../controller/lineStanderChange');
const lineStanderDelivered = require('../controller/lineStanderDelivered');



/* GET home page. */
router.get('/', homeController)

//Router to Register page
router.get('/register', newUserController)
router.post('/users/register', storeUserController)

//Router to Login page
router.get('/login',loginController)
router.post('/users/login', loginUserController)

//Router to logout page
router.get('/logout', logoutController)

//router to admin login page
router.get('/registerLinestander', adminLoginController)
router.post('/users/registerLinestander', storeLinestanderController)



//ADMIN ROUTERS
//router.get('/get-data', getDataAdminController,)
router.get('/adminUser', adminUserController)
router.get('/adminProducts', adminProductsController)
router.put('/update',updateDataAdminController)

router.delete('/delete/user/:id', deleteAdminController)

// PRODUCTS:
// We try to show all products from the database.
router.get('/products',productGET);

// We try to post the newly added product to the database.
router.post('/product/new',productPOST);

//delete products:
router.delete('/delete/product/:id', adminDeleteProductsController)

// LINEITEM:
// Now, we'll try to make a page for the individual product.
// We don't store the data in the database, so we make a GET-call instead of a STORE-call.
// We store the things on the cookie-session thingy
router.get('/lineItem/:id', lineItemSTORE);

// Now, we access the controller to show all the lineItems when trying to access the route '/lineItems'
router.get('/lineItems',lineItemGET);

// ORDER:
// The page where you type your billing address and the delivery location:
router.get('/order',orderGET);

// The button that posts your order in the database:
router.post('/order/new',orderSTORE);

// The users order history:
router.get('/orderHistory/:id', orderHistory);

// LINESTANDER:
router.get('/lineStander', lineStanderGET);

// Pick up order with put-method
router.put('/update/LS', lineStanderChange);

//
router.put('/update/LSdelivery', lineStanderDelivered);


// ERROR PAGE:
router.get('/error', errorPage);




module.exports = router;