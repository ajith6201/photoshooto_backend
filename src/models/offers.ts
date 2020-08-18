import mongoose from 'mongoose';
import { IOffers } from '../interfaces/IUser';


const Offers = new mongoose.Schema(
    {
        id:{type:String},
        name:{type: String},
        description:{type: String},
        img:{type: String}       
    }
);

module.exports =  mongoose.model<IOffers & mongoose.Document>('Offers', Offers);