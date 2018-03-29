import express from 'express';
import * as Education from '../controllers/education.controller';

const router = express.Router();
router.route('/:user_id')
  .get(Education.list);
router.route('/:user_id')
  .post(Education.save);
// router.route('/:id')
//   .get(Education.findOne);
// router.route('/:id')
//   .delete(Education.remove);

export default router;