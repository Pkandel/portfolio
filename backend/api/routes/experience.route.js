import express from 'express';
import * as experience from '../controllers/experience.controller.js';

const router = express.Router();
router.route('/:user_id')
  .post(experience.save);

export default router;
