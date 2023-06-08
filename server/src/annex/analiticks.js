import { services } from "../models/ServicesModel.js";
import mongoose from "mongoose";
import { analiticks } from "../models/AnaliticksModel.js";


class Analiticks{
    async Create(req,res){
        if(Object.keys(req.body).length){

            let data = req.body;
            let date = new Date().toLocaleString('ru',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour:'numeric',
                minute:'numeric'
            });
            const NewAnaliticks = new analiticks({
                object:data.object,
                price:data.price,
                name: data.name,
                surname: data.surname,
                phone:data.phone,
                msg: data.msg,
                date_on:data.date,
                date_off:date,
            })
            console.log(NewAnaliticks)
            console.log(data)
            await NewAnaliticks.save().then(
                (result) => {
                    res
                    .status(201)
                    .send(result)
                    console.log('выполнен заказ = ', result)
                },
                err => {console.log(err)}
              );
        }else {
            res
            .status(400)
            .send('idi nahyi')
        }
    }
}


export {Analiticks}