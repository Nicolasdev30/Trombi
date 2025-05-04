import { client } from '../database/client.js';
const siteController = {
    
    homePage: function (req, res) {

        const query = 'SELECT 1 + 1 AS result';
        
        client.query(query, function (err, result) {
            if (err) return console.log(err);

            console.log(err);
            console.log(result);
           
            console.log(result.rows);
        });

        res.render('index');
    },
};

export { siteController };
