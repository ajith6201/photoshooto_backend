import { Router, Request, Response } from 'express';
import DesignerService from '../../services/designers';
import { Container } from 'typedi';
import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
  app.use('/designers', route);

  route.get('/topdesigners',middlewares.isAuth, middlewares.attachCurrentUser, async(req: Request, res: Response) => {
    const logger = Container.get('logger');
    try {       
        const designerServiceInstance = Container.get(DesignerService);
        var designers = await designerServiceInstance.topDesigners();
        return res.json({ designers }).status(200);
      } catch (e) {
        logger.error('🔥 error: %o',  e );
        return next(e);
      }
  });

  route.get('/getdesigners',middlewares.isAuth, middlewares.attachCurrentUser, async(req: Request, res: Response) => {
    const logger = Container.get('logger');console.log(req.query.q);
    try {       
        let queryStr = req.query.q;
        let latlng = queryStr.split(",");
        const designerServiceInstance = Container.get(DesignerService);
        var designers = await designerServiceInstance.getDesigners(latlng);
        return res.json({ designers }).status(200);
      } catch (e) {
        logger.error('🔥 error: %o',  e );
        return next(e);
      }
  });
};


