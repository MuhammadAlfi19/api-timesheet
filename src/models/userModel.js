import db from '../config/koneksi.js'

const getUser = (callback) => {

    var sql = `SELECT id_user,nama,rate FROM user`;

    return db.query(sql,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    })
};

const updateUser = (body,callback) => {

    var sqlUpdate = `UPDATE user SET ? WHERE id_user = '${body.id_user}'`;
    var data = {
        nama: body.nama,
        rate: body.rate
    };

    return db.query(sqlUpdate,data,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        };
    })
}

export { getUser,updateUser }