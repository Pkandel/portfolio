import express from 'express';
import * as User from '../controllers/userController';

const router = express.Router();
router.route('/')
  .get(User.list);
router.route('/:user_id')
  .post(User.save);
router.route('/:user_id')
  .get(User.findOne);
router.route('/:user_id')
  .delete(User.remove);

export default router;
