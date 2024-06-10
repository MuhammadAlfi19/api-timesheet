import { getUser,updateUser } from '../models/userModel.js';
import response from '../utils/response.js';

const userGet = (req,res) => {

    getUser((err,result) => {
        if (result) {
            response(200,result,'Get User',res);
        } else {
            response(500,'invalid','error',res);
        }
    })
}

const userUpdate = (req,res) => {

    var data = req.body;

    updateUser(data,(err,result) => {
        if (result) {
            response(200,'success','Berhasil di update',res);
        } else {
            response(500,'invalid','Gagal di update',res);
        }
    })
}

export { userGet,userUpdate };