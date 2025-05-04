import students from '../../data/students.json' with { type: "json" };
import promos from '../../data/promos.json' with { type: "json" };

const studentsController = {


    showStudents(req, res) {
       
        const promoId = Number.parseInt(req.params.id, 10);
        if(Number.isNaN(promoId)) {
            return res.status(404).send('KO');
        }

        const promo = promos.find( function(promo) {
            return promo.id === promoId;
        });

        if(!promo) {
            return res.status(404).send('KO');
        }
        
        const filteredStudents = students.filter( function(student) {
            return student.promo === promoId;
        });

        res.render('students', { students: filteredStudents, promo });
        
    },
};

export { studentsController}