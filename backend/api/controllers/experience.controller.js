
import Experience from '../models/experience.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const { job_title, company_name, start_date, end_date, job_description } = req.body;
    const modified_on = new Date();
    const experience = new Experience({
        job_title, company_name, start_date, end_date, job_description, user, modified_on
    });
    experience.save((err, response) => {
        if(err) throw err;
        return res.json({
            message: 'Successfully saved into the database',
            data: null 
        })
    })
}

function list(req, res) {
    const user = req.params.user_id;
    Experience.find({user}, (err, response) => {
        if (err) {
            return res.status(201).json({
                message: 'Error fetchingt Experience details of the user',
                error: err
            })
        }
        return res.json({
            message: 'The Experience details of the user',
            data: response
        })
    })
}

export { save, list };
