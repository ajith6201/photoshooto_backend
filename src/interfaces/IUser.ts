export interface IUser {
  _id: string;
  first_name: string;
  email: string;
  password: string;
  salt: string;
  likes: number;
  city: string;
  pincode: number;
  profile_image: string;
  lat:number;
  lng:number;
}

export interface IUserInputDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  business_type: string;
  studio_name: string;
  mobile_number: string;
  referral_code: string;
  address_line_1: string;
  address_line_2: string;
  landmark: string;
  likes: number;
  city: string;
  state: string;
  pincode: number;
  profile_image: string;
  lat:number;
  lng:number;
}

export interface IOffers 
{
  _id:string,
  id:string,
  name:string,
  description:string,
  img:string
}