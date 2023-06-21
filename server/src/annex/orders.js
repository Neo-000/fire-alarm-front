import { services } from "../models/ServicesModel.js";
import mongoose from "mongoose";
import { order } from "../models/OrdersModel.js";
import { DbConnect } from "./dbinit.js";
const db = new DbConnect();

class Order{
    async Create(req,res){
        if(Object.keys(req.body).length){
            let date = new Date().toLocaleString('ru',
            {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour:'numeric',
                minute:'numeric'
            });
            let data = req.body;
            console.log(data)
            const NewOrder = new order({
                title:data.title,
                object:data.object,
                name: data.name,
                firstname: data.firstname,
                surname:data.surname,
                phone:data.phone,
                price:data.price,
                date:date,
                date_on:data.date_on,
                date_off:data.date_off,
                msg:data.msg
            })
            // await db.on();
            await NewOrder.save().then(
                (result) => {
                    res
                    .status(201)
                    .send(result)
                    console.log('создан заказ = ', result)
                },
                err => {console.log(err)}
              );
    
            // await db.off();
        }else {
            res
            .status(400)
            .send('idi nahyi')
        }
    }
    async GetAll(req,res){
        const all_bid = await order.find({});
        if(all_bid != undefined & all_bid != '' & all_bid.length != ''){
            res
            .status(200)
            .send({
                items:all_bid.length,
                orders:all_bid
            })
        } else {
            res
            .status(200)
            .send({items:0})
        }
        return true;
    }
    async Update(req,res){
        const data = req.body.data
        if(Object.keys(req.body).length){
        await order.updateOne({_id:req.body._id},{
                title:data.title,
                object:data.object,
                name: data.name,
                firstname: data.firstname,
                surname:data.surname,
                phone:data.phone,
                price:data.price,
                date_on:data.date_on,
                date_off:data.date_off,
                msg:data.msg
            }).then(
              (result) => {
                res
                .status(200)
                .send(req.body._id)
                console.log(result)
              },
              err => {console.log(err)}
            ) 
        }else {
          res
          .status(400)
          .send('idi nahui')
          return console.log('данных нету бля', req.body)
      }
  }
    async Delete(req,res){
        const data = req.body;
        if(Object.keys(data).length){
            // await db.on();
            await order.deleteOne({_id:data._id}).then(
                (result) => {
                    res
                    .status(200)
                    .send('успешно удален заказ')

                },
                err => {
                    res
                    .status(404)
                    .send(err)
                }
            )
            return true;
        }
        else{
            res
            .status(404)
            .send('idi nahyi')
        }
    }
    async DeleteAll(req,res){
            // await db.on();
            await order.deleteMany({}).then(
                (result) => {
                    res
                    .status(200)
                    .send('успешно удалены все Заказы')

                },
                err => {
                    res
                    .status(404)
                    .send('Заказов нет')
                }
            )
            return true;
        }
    }


export {Order}