import { Router } from "express";
const router = Router();
import { siteController } from './controllers/siteController.js';
import { promosController } from './controllers/promosController.js';
import { studentsController } from './controllers/studentsController.js';

router.get('/', siteController.homePage);

router.get('/promos', promosController.showPromos);

router.get('/promos/:id', promosController.showOnePromo);

router.get('/promos/:id/students', studentsController.showStudents);

export { router };
