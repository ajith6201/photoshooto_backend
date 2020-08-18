import { Router } from 'express';
import auth from './routes/auth';
import user from './routes/user';
import agendash from './routes/agendash';
import designers from './routes/designers';
import offers from './routes/offers';

// guaranteed to get dependencies
export default () => {
	const app = Router();
	auth(app);
	user(app);
	designers(app);
	offers(app);
	agendash(app);

	return app
}