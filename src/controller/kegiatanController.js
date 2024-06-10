import { getDataByIdKegiatan,hapusKegiatan,kegiatanById,proyekAll,simpanKegiatan,tambahProyek,updateKegiatan } from '../models/kegiatanModel.js';
import response from '../utils/response.js';

const kegiatanGetAllById = (req,res) => {

    kegiatanById((err,result) => {
        if (result) {
            response(200,result,"Get Kegiatan By Id User",res);
        } else {
            response(500,"Invalid","error",res);
        }
    })
}

const dataByIdKegiatanGet = (req,res) => {

    const id = req.params.id;

    getDataByIdKegiatan(id,(err,result) => {
        if (result) {
            response(200,result,'Get Kegiatan By Id Kegiatan',res);
        } else {
            response(500,'Invalid','error',res);
        }
    })
}

const kegiatanPost = (req,res) => {

    var data = req.body;

    simpanKegiatan(data,(err,result) => {
        if (result) {
            response(200,data,"Berhasil di simpan",res);
        } else {
            response(500,"invalid","error",res);
        }
    });
}

const kegiatanPut = (req,res) => {

    var data = req.body;

    updateKegiatan(data,(err,result) => {
        if (result) {
            response(200,data,"Berhasil di update",res);
        } else {
            response(500,"invalid","error",res);
        }
    })
}

const kegiatanDelete = (req,res) => {
    const id = req.params.id;

    hapusKegiatan(id,(err,result) => {
        if (result) {
            response(200,'success','Berhasil dihapus',res);
        } else {
            response(500,'error','Gagal dihapus',res);
        }
    })
}

const proyekAllGet = (req,res) => {

    proyekAll((err,result) => {
        if (result) {
            response(200,result,'Get Proyek All',res);
        } else {
            response(500,'invalid','error',res);
        }
    })
}

const proyekPost = (req,res) => {
    var data = req.body;
    tambahProyek(data,(err,result) => {
        if (result) {
            response(200,'success','Berhasil di simpan',res);
        } else {
            response(500,'Invalid','Gagal di simpan',res);

        }
    })
}

export { kegiatanGetAllById,dataByIdKegiatanGet,kegiatanPost,kegiatanPut,kegiatanDelete,proyekAllGet,proyekPost }