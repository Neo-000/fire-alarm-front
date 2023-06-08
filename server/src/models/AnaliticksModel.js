import mongoose from 'mongoose';
const { Schema } = mongoose;

const AnaliticksModel = new Schema({
      object:String,
      price:Number,
      name: String,
      surname: String,
      phone:Number,
      msg: String,
      date_on:String,
      date_off:String,

})

export const analiticks = mongoose.model('Analiticks', AnaliticksModel)