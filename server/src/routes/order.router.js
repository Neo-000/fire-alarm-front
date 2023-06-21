import express from 'express';
const router = express.Router();

import { Order } from '../annex/orders.js';
const order = new Order();

router.post('/create', (req,res) => {
    order.Create(req,res);
})
router.post('/all', (req,res) => {
    order.GetAll(req,res);
})
router.post('/delete', (req,res) => {
    console.log(res.data)
    order.Delete(req,res);
})
router.post('/delete_all', (req,res) => {
    order.DeleteAll(req,res);
})
router.post('/update', (req,res) => {
    order.Update(req,res);
})

const order_roter = router;
export {order_roter};