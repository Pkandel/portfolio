
import express from 'express';
import * as about from '../controllers/about.controller.js';
import { upload } from '../helpers';

const router = express.Router();
router.route('/:user_id')
  .post(about.save);
router.route('/:user_id')
  .get(about.list);

export default router;
