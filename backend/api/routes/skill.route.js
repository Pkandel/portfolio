

import express from 'express';
import * as skill from '../controllers/skill.controller.js';

const router = express.Router();
router.route('/:user_id')
  .post(skill.save);
router.route('/:user_id')
  .get(skill.list);

export default router;
