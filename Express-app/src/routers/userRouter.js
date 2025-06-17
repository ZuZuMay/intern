import express from 'express';
import { userGet, userCreate, userUpdate, userGetId ,userList} from '../Controller/server.controller.js';
const userRouter = express.Router();

userRouter.post('/', userCreate);
userRouter.get('/posts', userGet)
userRouter.get('/posts/:id',userList)
 userRouter.get('/:name/:id',userGetId)
 userRouter.put('/',userUpdate)
export default userRouter; 