
import Experience from '../models/experience.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const { job_title, company_name, start_date, end_date, job_description } = req.body;
    const experience = new Experience({
        job_title, company_name, start_date, end_date, job_description, user 
    });
    experience.save((err, response) => {
        if(err) throw err;
        return res.json({
            message: 'Successfully saved into the database',
            data: null 
        })
    })
}

export { save };
