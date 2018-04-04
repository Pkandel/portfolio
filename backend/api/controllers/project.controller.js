import Project from '../models/project.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const modified_on = new Date();
    let _projectArray = req.body;
    _projectArray.map(project => {
        project['modified_on'] = modified_on;
        project['user'] = user;
    })
    Project.insertMany(_projectArray, (err, response) => {
        if(err) {
            console.log('Error saving project', err);
            return res.json({
                message: 'Error saving project',
                error: err
            })
        }
        return res.json({
            message: 'Successfully saved the project into the database',
            data: response
        })
    })
}

function list(req, res) {
    const user = req.params.user_id;
    Project.find({user}, (err, response) => {
        if (err) {
            return res.status(201).json({
                message: 'Error fetchingt Project details of the user',
                error: err
            })
        }
        return res.json({
            message: 'The Project details of the user',
            data: response
        })
    })
}


export { save, list };
