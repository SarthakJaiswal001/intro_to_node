const express=require('express');
const router=express.Router();
const {getAllProducts,getAllProductsTrial}=require("../controller/product");
router.route('/').get(getAllProducts);
router.route('/home').get(getAllProductsTrial);

module.exports=router;