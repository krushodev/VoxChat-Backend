import { Router } from 'express';

import SessionController from '../controllers/sessionController';

const sessionRouter = Router();

sessionRouter.post('/login', SessionController.login);
sessionRouter.post('/signup', SessionController.signup);
sessionRouter.post('/refresh-token', SessionController.provideRefreshToken);
sessionRouter.post('/:id/update-image', SessionController.updateImage);

export default sessionRouter;
