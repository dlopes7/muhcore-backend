import * as express from 'express';
import api from './api'

let router = express.Router();

router.use('/api/v1', api);

export default router;