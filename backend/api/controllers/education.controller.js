import Education from '../models/education.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const { course_name, college_name, start_date, course_description } = req.body;
    const edu = new Education({ course_name, college_name, start_date, course_description, user  });
    edu.save((err, response) => {
        if(err) return res.json({ message: "error saveing education" });
        return res.json({
            message: 'Successfully saved into the database',
            data: null 
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
