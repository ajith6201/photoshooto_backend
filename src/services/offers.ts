import { Service, Inject } from 'typedi';
import { IOffers } from '../interfaces/IUser';

@Service()
export default class OfferService {
    constructor(
        @Inject('offersModel') private offersModel : Models.OffersModel,    
        @Inject('logger') private logger,       
    ){}
    public async offers(): Promise<{ offersList: IOffers; }>
    {
        try {
            let offersList:any = [];
            this.logger.silly('getting top 10 designers');
            console.log(this.offersModel);
            const offersResult = await this.offersModel.find({}).limit(10);
            for (let offer of offersResult) {
                offersList.push(
                    {
                        id: offer._id, 
                        name: offer.name, 
                        description: offer.description,
                        img: offer.img                       
                    });
            }
            return  offersList;         
            
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }
}