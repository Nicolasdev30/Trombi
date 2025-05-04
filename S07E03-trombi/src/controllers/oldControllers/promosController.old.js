
import { client } from '../database/client.js';

const promosController = {
  showPromos: function (req, res) {


    const query = 'SELECT * FROM promo;';

    client.query(query, (err, result) => {
        if(err) return console.log(err);

        const promos = result.rows;

        res.locals.promos = promos;
       
        res.render('promos');
    });
    
  },

  showOnePromo: function (req, res) {
    
    const id = req.params.id;
    
    const foundPromo = promos.find(
      (promo) => promo.id === Number.parseInt(id, 10)
    );

    if (!foundPromo) {
      
      return res.status(404).send('not found');
    }

    res.render('promo', { promo: foundPromo });
  },
};

export { promosController };
