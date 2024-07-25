const express = require("express");
const Order = require("../models/Orders");
const router = express.Router();

router.post('/orderData', async (req, res) => {
    try {
        let data = req.body.order_data;
        data.unshift({ order_date: req.body.order_date });

        // Check if the email exists in the database
        let existingOrder = await Order.findOne({ email: req.body.email });

        if (!existingOrder) {
            // If no existing order found, create a new order
            await Order.create({
                email: req.body.email,
                order_data: [data]
            });
        } else {
            // If existing order found, update the order_data array
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            );
        }

        res.json({ success: true });
    } catch (error) {
        console.error("Error during order data processing: ", error.message);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

router.post('/myorderData', async (req, res) => {
    try{
       let myData = await Order.findOne({'email':req.body.email})
       res.json({orderData:myData})
    } catch (error) {
       res.send("Server Error", error.message)
    }

})
module.exports = router;
