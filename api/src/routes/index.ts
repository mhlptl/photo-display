import express from 'express';

const router: express.Router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
	res.send('Welcome to the Photo Display API');
});

router.all('/', (req: express.Request, res: express.Response) => {
	res.status(404).send('Route DNE');
});

export default router;
