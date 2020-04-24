const express = require('express');
const router = express.Router();

const newUserController = require('../controller/user/newUser')
const storeUserController = require('../controller/user/storeUser')
const homeController = require('../controller/homeController')
const loginController = require('../controller/user/loginController')
const loginUserController = require('../controller/user/loginUser')
const adminLoginController = require('../controller/admin/getRegisterLinestander')
const storeLinestanderController = require('../controller/admin/storeLinestander')
const updateDataAdminController = require('../controller/admin/updateDataForAdmin')
const logoutController = require('../controller/user/logoutController')
const deleteAdminController = require('../controller/admin/deleteDataAdmin')
const orderGET = require('../controller/order/orderGET');
const orderSTORE = require('../controller/order/orderSTORE');
const orderHistory = require('../controller/order/orderHistory');
const lineStanderGET = require('../controller/lineStander/lineStanderGET');
const errorPage = require('../controller/errorPage');
const adminUserController = require('../controller/admin/getAdminUser');
const adminProductsController = require('../controller/admin/adminProducts')
const adminDeleteProductsController = require('../controller/admin/deleteProducts')


// PRODUCTS:
const productGET = require('../controller/products/productGET');
const productPOST = require('../controller/products/productPOST');

// LINEITEM:
const lineItemSTORE = require('../controller/lineItem/lineItemSTORE');
const lineItemGET = require('../controller/lineItem/lineItemGET');

// LINESTANDER:
const lineStanderChange = require('../controller/lineStander/lineStanderChange');
const lineStanderDelivered = require('../controller/lineStander/lineStanderDelivered');

// ADDRESS:
const addressGET = require('../controller/addressGET');
const addressPUT = require('../controller/addressPUT');


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


// ADDRESS:
router.get('/address', addressGET);
router.put('/update/address', addressPUT);

// ERROR PAGE:
router.get('/error', errorPage);




module.exports = router;