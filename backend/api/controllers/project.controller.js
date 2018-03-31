import Project from '../models/project.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const { project_name, company_name, project_description, technology_used, role_description, source_code, demo_url } = req.body;
    const project = new Project({
        project_name, company_name, project_description, technology_used, role_description, source_code, demo_url, user 
    });
    project.save((err, response) => {
        if(err) {
            console.log('Error saving project', err);
            return res.json({
                message: 'Error saving project',
                data: err
            })
        }
        return res.json({
            message: 'Successfully saved the project into the database'
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
