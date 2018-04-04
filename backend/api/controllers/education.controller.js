import Education from '../models/education.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const modified_on = new Date();
    let _educationArray = req.body;
    _educationArray.map(edu => {
        edu['modified_on'] = modified_on;
        edu['user'] = user;
    })
    Education.insertMany(_educationArray, (err, response) => {
        if(err) return res.json({ 
            message: "error saveing education",
            error: err
        });
        return res.json({
            message: 'Successfully saved into the database',
            data: response 
        })
    })
}

function list(req,res) {
    const user = req.params.user_id;
    Education.find({ user })
        .exec(function(err, education) {
            if(err) return res.json({ message: "Error fetching user"});
            return res.json({
                message: "List of education provideres",
                data: education
            })
        })
}

export { save, list };
