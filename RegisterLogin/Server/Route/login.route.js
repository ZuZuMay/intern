import express from "express";
import { userCreate, userFind ,getUser} from '../Controller/loginController.js';

const router = express.Router();
router.get('/',getUser)
router.post('/register', userCreate);
router.post('/login', userFind);

export default router;
