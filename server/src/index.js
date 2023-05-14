import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import {config} from '../config/config.js';
import cors from 'cors';
const app = express();
import { router } from './routes/index.js';
import { DbConnect } from './annex/dbinit.js';
const db = new DbConnect();

app.listen(config.port, () => {
    db.on()
    console.log(`
    [OK] Server is running on localhost:${config.port}
    `);
})
app.use(json());
app.use(urlencoded({extended: false}));
app.use(cors());
app.use(morgan('dev'));
app.use('/', router);





