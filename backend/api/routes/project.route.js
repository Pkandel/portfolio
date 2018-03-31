import express from 'express';
import * as project from '../controllers/project.controller.js';

const router = express.Router();
router.route('/:user_id')
  .post(project.save);
router.route('/:user_id')
  .get(project.list);

export default router;
