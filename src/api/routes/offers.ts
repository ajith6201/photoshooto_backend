import { Router, Request, Response } from 'express';
import OfferService from '../../services/offers';
import { Container } from 'typedi';
import middlewares from '../middlewares';
const route = Router();


export default (app: Router) => {
    app.use('/offers', route);
  
    route.get('/listoffers',middlewares.isAuth, middlewares.attachCurrentUser, async(req: Request, res: Response, next) => {
      
      const logger = Container.get('logger');
      try {       
          const offerServiceInstance = Container.get(OfferService);
          var offers = await offerServiceInstance.offers();
          return res.json({ offers }).status(200);
        } catch (e) {
          logger.error('🔥 error: %o',  e );
          return next(e);
        }
    });
  };