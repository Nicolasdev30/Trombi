
import { dataMapper } from '../database/dataMapper.js';

const promosController = {
    //
    async showPromos(req, res, next) {
        try {

            const promos = await dataMapper.getAllPromos();

            res.render('promos', { promos });

        } catch (error) {
            next(error);
        }

    },

    async showOnePromo(req, res, next) {
        const id = req.params.id;

        try {
            const promo = await dataMapper.getOnePromo(id);

            if (!promo) {
                return next();
            }

            res.render('promo', { promo });
        } catch (error) {
            next(error);
        }
    },
};

export { promosController };
