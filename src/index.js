import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Endpoint API
import User from './routes/userRoutes.js';
import Kegiatan from './routes/kegiatanRoutes.js';



const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/',Kegiatan);
app.use('/',User);

app.listen(4000,() => {
    console.log(`Server aktif di port 4000`);
});