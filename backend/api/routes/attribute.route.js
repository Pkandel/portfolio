
import express from 'express';
import * as attribute from '../controllers/attribute.controller.js';

const router = express.Router();
router.route('/:user_id/:base_id')
  .post(attribute.save);

export default router;
