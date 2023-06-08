import express from 'express';
const router = express.Router();

import { Analiticks } from '../annex/analiticks.js';
const analiticks = new Analiticks();

router.post('/create', (req,res) => {
    analiticks.Create(req,res);
})


const analiticks_router = router;
export {analiticks_router};