const express = require('express');
const router = express.Router();

// HOME:
const homeController = require('../controller/homeController')

// ERROR:
const errorPage = require('../controller/errorPage');

// USER:
const newUserController = require('../controller/user/newUser')
const storeUserController = require('../controller/user/storeUser')
const loginController = require('../controller/user/loginController')
const loginUserController = require('../controller/user/loginUser')
const logoutController = require('../controller/user/logoutController')
const accountSettings = require('../controller/user/accountSettings');

// ADDRESS:
const addressGET = require('../controller/address/addressGET');
const addressPUT = require('../controller/address/addressPUT');

// ADMIN:
const adminLoginController = require('../controller/admin/getRegisterLinestander')
const updateDataAdminController = require('../controller/admin/updateDataForAdmin')
const adminUserController = require('../controller/admin/getAdminUser');
const adminProductsController = require('../controller/admin/adminProducts')
const adminDeleteProductsController = require('../controller/admin/deleteProducts')
const deleteAdminController = require('../controller/admin/deleteDataAdmin')

// PRODUCTS:
const productGET = require('../controller/products/productGET');
const productPOST = require('../controller/products/productPOST');

// LINEITEM:
const lineItemSTORE = require('../controller/lineItem/lineItemSTORE');
const lineItemGET = require('../controller/lineItem/lineItemGET');
const lineItemReduce = require('../controller/lineItem/lineItemReduce');
const lineItemDelete = require('../controller/lineItem/lineItemDELETE')

// ORDER:
const orderGET = require('../controller/order/orderGET');
const orderSTORE = require('../controller/order/orderSTORE');
const orderHistory = require('../controller/order/orderHistory');

// LINESTANDER:
const lineStanderGET = require('../controller/lineStander/lineStanderGET');
const lineStanderChange = require('../controller/lineStander/lineStanderChange');
const lineStanderDelivered = require('../controller/lineStander/lineStanderDelivered');



/* GET home page. */
router.get('/', homeController)

// ERROR PAGE:
router.get('/error', errorPage);


// USER ROUTES:
// Route to Register page
router.get('/register', newUserController)
// Route to register a new customer
router.post('/users/register', (req, res)=>{storeUserController(req,res,'customer')})

// Route to Login page
router.get('/login',loginController)
router.post('/users/login', loginUserController)

// Route to logout page
router.get('/logout', logoutController)

// Account settings for the customer
router.get('/accountSettings', accountSettings);


// ADMIN ROUTES:
// Route to admin login page
router.get('/registerLinestander', adminLoginController)
// Create a new LineStander
router.post('/users/registerLinestander', (req, res)=>{storeUserController(req, res, 'linestander')})
// Render adminUser to show all customers. From here the admin can change/delete a customer.
router.get('/adminUser', adminUserController)
// Show products on the admin page so he can delete one
router.get('/adminProducts', adminProductsController)
// Delete products for admin
router.delete('/delete/product/:id', adminDeleteProductsController)
// Update a user
router.put('/update',updateDataAdminController)
// Delete a user
router.delete('/delete/user/:id', deleteAdminController)


// PRODUCT ROUTES:
// Route to show all products from the database.
router.get('/products',productGET);
// Route to post the newly added product to the database.
router.post('/product/new',productPOST);



// LINEITEM ROUTES:
// We don't store the data in the database, so we make a GET-call instead of a STORE-call.
// We store the things on the cookie-session instead.
router.get('/lineItem/:id', lineItemSTORE);
// Now, we access the controller to show all the lineItems from the session.
router.get('/lineItems',lineItemGET);
// Route to reduce the lineItem in the session by one
router.get('/lineItem/reduce/:id', lineItemReduce);
// Route to delete a product-line from the session regardless of the amount of chosen products
router.get('/lineItem/delete/:id', lineItemDelete);


// ORDER ROUTES:
// The page where you type the delivery location and have a chance to change billing/home address:
router.get('/order',orderGET);
// The button that posts your order in the database:
router.post('/order/new',orderSTORE);
// The logged in user's order history:
router.get('/orderHistory/:id', orderHistory);


// LINESTANDER ROUTES:
// LineStanders page where he can see orders with the three different types of status.
router.get('/lineStander', lineStanderGET);
// Pick up order with put-method
router.put('/update/LS', lineStanderChange);
// Use PUT to change the status from "ongoing" to "completed"
router.put('/update/LSdelivery', lineStanderDelivered);


// ADDRESS ROUTES:
// The page the user accesses when he wants to change address
router.get('/address', addressGET);
// The route to actually change the address in the database
router.put('/update/address', addressPUT);



module.exports = router;