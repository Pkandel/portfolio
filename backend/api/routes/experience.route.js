import express from 'express';
import * as experience from '../controllers/experience.controller.js';

const router = express.Router();
router.route('/:user_id')
  .post(experience.save);
  router.route('/:user_id')
  .get(experience.list);

export default router;
