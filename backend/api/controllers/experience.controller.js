
import Experience from '../models/experience.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const modified_on = new Date();
    const _experienceArray = req.body;
    _experienceArray.map(exp => {
        exp['modified_on'] = modified_on;
        exp['user'] = user;
    })

    Experience.insertMany( _experienceArray, (err, response) => {
        if(err) {
            return res.json({
                message: 'Error saving to the database',
                error: err
            })
        }
        return res.json({
            message: 'Successfully saved into the database',
            data: response
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
