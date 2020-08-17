import { Document, Model } from 'mongoose';
import { IUser, IOffers } from '../../interfaces/IUser';
declare global {
  namespace Express {
    export interface Request {
      currentUser: IUser &  Document;
    }    
  }

  namespace Models {
    export type UserModel = Model<IUser & Document>;
    export type OffersModel = Model<IOffers & Document>;
  }
}
