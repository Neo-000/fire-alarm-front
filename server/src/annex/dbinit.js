import mongoose from "mongoose";
import { config } from "../../config/config.js";
const url = config.url_db;

class DbConnect{
    
    async on(){
        console.log('-------------------START---CONECTED----------------------------');
        try {
            await mongoose.connect(url, { useNewUrlParser: true });
            console.log(true)
          } catch (error) {
            handleError(error);
          }
         const db = mongoose.connection;
        //  console.log(db)
         console.log('-------------------END---CONECTED----------------------------')
    }

    async off(){
        console.log('-------------------START---DISCONECTED----------------------------')
        await mongoose.disconnect()
            .then(
                () => {console.log('no')},
                err =>{ console.log('error off db', err)}
            )
            const db = mongoose.connection;
            console.log(db.states)
            console.log('-------------------END---DISCONECTED----------------------------')
    }
}

export {DbConnect}
