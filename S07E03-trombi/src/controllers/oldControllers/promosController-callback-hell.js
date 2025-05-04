import { client } from '../database/client.js';

const promosController = {
    async showPromos(req, res) {
        const query = 'SELECT * FROM promo;';

        const result = await client.query(query);

        res.render('promos', { promos: result.rows });

     
    },

    async showOnePromo(req, res) {
        const id = req.params.id;
       
        const query = `SELECT * FROM promo WHERE id = ${id}`;

        const result = await client.query(query);

        if (!result.rowCount) {
           
            return res.status(404).send('not found');
        }
      
        res.render('promo', { promo: result.rows[0] });
    },
};

export { promosController };
