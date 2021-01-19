
var express = require("express");
const router = express.Router();
const request = require('request');




router.get('/pincode/:pincode',  (req, res, next) => {

    request('https://api.postalpincode.in/pincode/'+ req.params.pincode, function(err, response, body) {
       if(!err) {
           let pincodeDetail = JSON.parse(body);
           return res.status(200).json({success: true,  pincodeDetail})
       }
   })
});

module.exports=router;