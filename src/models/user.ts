import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please enter a first name'],
      index: true,
    },
    last_name: {
      type: String,
      required: [true, 'Please enter a last name'],
      trim: true,
    },
    business_type:
    {
      type:String,
      trim:true
    },
    studio_name: 
    {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
    },
    mobile_number: 
    {
      type: String,
      trim: true
    },
    identification_doc: {
      type:Array
    },
    referral_code: {
      type: String,
      trim: true
    },
    address_line_1: {
      type: String,
      trim: true
    },
    address_line_2: {
      type: String,
      trim: true
    },
    landmark: {
      type: String,
      trim: true
    },
    password: String,

    salt: String,

    likes:
    {
      type:Number,
      trim: true
    },
    city:
    {
      type:String,
      trim: true
    },
    state: {
      type: String,
      trim: true
    },
    pincode:
    {
      type:Number,
      trim: true
    },
    agree:
    {
      type:Boolean, default:false
    },
    promotion_email:
    {
      type:Boolean, default:false
    },
    isVerified: { type: Boolean, default: false },

    isDocVerified: { type: Boolean, default: false },
    
    role: {
      type: String,
      default: 'user',
    },
    
  },
  { timestamps: true },
);

export default mongoose.model<IUser & mongoose.Document>('User', User);
