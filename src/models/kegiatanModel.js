import db from '../config/koneksi.js';
import { generateIdKegiatan } from '../utils/functionUtils.js';
import moment from 'moment';


const kegiatanById = (callback) => {

    var sql = `SELECT id_user, id_kegiatan, judul_kegiatan, kegiatan.id_proyek, DATE_FORMAT( tgl_mulai, "%Y-%m-%d" ) AS tgl_mulai, DATE_FORMAT( tgl_berakhir, "%Y-%m-%d" ) AS tgl_berakhir, waktu_mulai, waktu_berakhir, durasi, proyek.nama_proyek FROM kegiatan INNER JOIN proyek ON kegiatan.id_proyek = proyek.id_proyek WHERE id_user = 'A-001'`;

    return db.query(sql,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    });
}

const getDataByIdKegiatan = (id,callback) => {

    var sql = `SELECT id_user, id_kegiatan, judul_kegiatan, kegiatan.id_proyek, DATE_FORMAT( tgl_mulai, "%Y-%m-%d" ) AS tgl_mulai, DATE_FORMAT( tgl_berakhir, "%Y-%m-%d" ) AS tgl_berakhir, waktu_mulai, waktu_berakhir, durasi, proyek.nama_proyek FROM kegiatan INNER JOIN proyek ON kegiatan.id_proyek = proyek.id_proyek WHERE id_kegiatan = '${id}'`;

    return db.query(sql,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    });
}

const simpanKegiatan = (body,callback) => {

    const idUser = "A-001";
    const idKegiatan = generateIdKegiatan(5);
    const now = new Date();

    const moment1 = moment(body.jamMulai,'HH:mm');
    const moment2 = moment(body.jamBerakhir,'HH:mm');

    const selisihDurasi = moment.duration(moment2.diff(moment1));

    const durasi = selisihDurasi.hours() + ":" + selisihDurasi.minutes()


    var sqlInsert = `INSERT INTO kegiatan SET ?`;
    var data = {
        id_user: idUser,
        id_kegiatan: idKegiatan,
        judul_kegiatan: body.judulKegiatan,
        id_proyek: body.idProyek,
        tgl_mulai: body.tglMulai,
        tgl_berakhir: body.tglBerakhir,
        waktu_mulai: body.jamMulai,
        waktu_berakhir: body.jamBerakhir,
        durasi: durasi,
        crtx_date: now,
    }


    return db.query(sqlInsert,data,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    })
}

const updateKegiatan = (body,callback) => {

    const now = new Date();

    const moment1 = moment(body.jamMulai,'HH:mm');
    const moment2 = moment(body.jamBerakhir,'HH:mm');

    const selisihDurasi = moment.duration(moment2.diff(moment1));

    const durasi = selisihDurasi.hours() + ":" + selisihDurasi.minutes()


    var sqlUpdate = `UPDATE kegiatan SET ? WHERE id_kegiatan = '${body.id_kegiatan}' `;

    var data = {
        judul_kegiatan: body.judulKegiatan,
        id_proyek: body.idProyek,
        tgl_mulai: body.tglMulai,
        tgl_berakhir: body.tglBerakhir,
        waktu_mulai: body.jamMulai,
        waktu_berakhir: body.jamBerakhir,
        durasi: durasi,
        updt_date: now,
    }

    return db.query(sqlUpdate,data,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    })
}

const hapusKegiatan = (id,callback) => {

    var sqlDelete = `DELETE FROM kegiatan WHERE id_kegiatan = '${id}'`;

    return db.query(sqlDelete,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    })
}

const proyekAll = (callback) => {

    var sql = `SELECT * FROM proyek`;

    return db.query(sql,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    })
}

const tambahProyek = (body,callback) => {

    var sqlInsert = 'INSERT INTO proyek SET ?';

    var data = {
        nama_proyek: body.nama_proyek,
    };

    return db.query(sqlInsert,data,(err,result) => {
        if (err) {
            callback(err,null);
        } else {
            callback(null,result);
        }
    })
}

export { kegiatanById,getDataByIdKegiatan,simpanKegiatan,updateKegiatan,hapusKegiatan,proyekAll,tambahProyek }