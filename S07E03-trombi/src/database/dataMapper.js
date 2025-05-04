import { client } from "./client.js";

const dataMapper = {
    /**
     * cette méthode retourne les promos
     * @returns {array<object?>}
     */
    async getAllPromos() {

        const query = 'SELECT * FROM promo;';

        const result = await client.query(query);
        
        return result.rows;
    },

    /**
     * cette méthode est utilisé pour aller chercher une promo dans la BDD
     * @param {number} id
     * @returns {object|null}
     */
    async getOnePromo(id) {
        
        const query = {
            text: 'SELECT * FROM promo WHERE id = $1',
            values: [id]
        }

        const result = await client.query(query);

        
        let ret = null;

        if (result.rowCount) {
            ret = result.rows[0];
        }

        return ret;
    },

    /**
     * Cette méthode retourne une liste d'étudiant d'une promo(promoId)
     * @param {number} promoId
     * @returns {array<object?>}
     */
    async getAllStudentsOfOnePromo(promoId) {
        const studentsQuery = {
            text: 'SELECT * FROM student WHERE promo_id = $1',
            values: [promoId],
        };

        const result = await client.query(studentsQuery);

        return result.rows;
    }

}

export { dataMapper }