import { Service, Inject } from 'typedi';
import { IUser } from '../interfaces/IUser';


@Service()
export default class DesignerService {
    constructor(
        @Inject('userModel') private userModel : Models.UserModel,    
        @Inject('logger') private logger,       
    ){}
    public async topDesigners(): Promise<{ designersList: IUser; }>
    {
        try {
            let designersList:any = [];
            this.logger.silly('getting top 10 designers');
            const topDesigners = await this.userModel.find({}).limit(10);
            for (let designer of topDesigners) {
                designersList.push(
                    {
                        id: designer._id, 
                        name: designer.first_name, 
                        likes: designer.likes,
                        city: designer.city,
                        pincode: designer.pincode,
                        profileImage: designer.profile_image
                    });
            }
            return  designersList;         
            
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    public async getDesigners(latlng)
    {
        try {
            let designersList:any = [];
            this.logger.silly('getting top 10 designers');
            const designer = await this.userModel.findOne({lat:latlng[0],lng:latlng[1]});

            if(designer)
            {
                return  designer; 
            }
            
            const designerbycity = await this.userModel.find({});

            for (let designer of designerbycity) 
            {
                //console.log(designer.lat);
                let city = this.distance(latlng[0],latlng[1],designer.lat,designer.lng,"K");
                console.log(city);
            }
            
            
        } catch (e) {
            this.logger.error(e);
            throw e;
        }
    }

    distance(lat1, lon1, data_lat, data_lon, unit) {
    	var radlat1 = Math.PI * lat1/180
    	var radlat2 = Math.PI * data_lat/180
    	var theta = lon1-data_lon
    	var radtheta = Math.PI * theta/180
    	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    	if (dist > 1) {
    		dist = 1;
    	}
    	dist = Math.acos(dist)
    	dist = dist * 180/Math.PI
    	dist = dist * 60 * 1.1515
    	if (unit=="K") { dist = dist * 1.609344 }
    	if (unit=="N") { dist = dist * 0.8684 }
    	return dist;
    }

}