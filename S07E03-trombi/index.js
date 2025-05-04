
import 'dotenv/config';
import path from 'node:path';
import express from 'express';
const app = express();
import { router } from './src/router.js';
import { notFound } from './src/middlewares/errors/notFound.js';
import { errorHandler } from './src/middlewares/errors/errorHandler.js';

app.set('view engine', 'ejs');
app.set('views', path.join(import.meta.dirname, 'src/views'));
app.use(express.static(path.join(import.meta.dirname, 'assets')));

app.use(router);
app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT;
const base_url = process.env.BASE_URL;

app.listen(port, () => console.log(`Listening on ${base_url}:${port}`));
