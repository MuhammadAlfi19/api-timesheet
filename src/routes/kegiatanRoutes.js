import express from 'express';
import { kegiatanGetAllById,kegiatanPost,kegiatanDelete,dataByIdKegiatanGet,kegiatanPut,proyekAllGet,proyekPost } from '../controller/kegiatanController.js';

const route = express.Router();

route.get('/kegiatan/getAllById',kegiatanGetAllById);
route.get('/kegiatan/getAllByIdKegiatan/:id',dataByIdKegiatanGet);
route.post('/kegiatan/simpan',kegiatanPost);
route.put('/kegiatan/update',kegiatanPut);
route.delete('/kegiatan/delete/:id',kegiatanDelete);

route.get('/kegiatan/proyekAll',proyekAllGet);
route.post('/kegiatan/proyek/simpan',proyekPost);

export default route;
