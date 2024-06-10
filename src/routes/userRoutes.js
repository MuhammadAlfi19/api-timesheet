import express from 'express';
import { userGet,userUpdate } from '../controller/userController.js';

const route = express.Router();

route.get('/user/getuser',userGet);
route.put('/user/update',userUpdate);

export default route;
