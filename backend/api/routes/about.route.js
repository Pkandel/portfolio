
import express from 'express';
import * as about from '../controllers/about.controller.js';

const router = express.Router();
router.route('/:user_id')
  .post(about.save);

export default router;
