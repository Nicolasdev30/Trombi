import { dataMapper } from '../database/dataMapper.js';

const studentsController = {
    async showStudents(req, res, next) {
        const promoId = Number.parseInt(req.params.id, 10);
        if (Number.isNaN(promoId)) {
            return res.status(404).send('KO');
        }

        try {
            const promo = await dataMapper.getOnePromo(promoId);

            if (!promo) {
                return next();
            }

            const students = await dataMapper.getAllStudentsOfOnePromo(promoId);

            res.render('students', { students, promo });
        } catch (error) {
            next(error);
        }
    },
};

export { studentsController };
