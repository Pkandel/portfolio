import Skill from '../models/skill.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const { skill } = req.body;

    const _skill = new Skill({
        skill,
        user
    })
    _skill.save((err, response) => {
        if(err){
            console.log('Error saving skill', err);
            return res.json({
                message:'Error saving skill',
                data: err
            })
        }
        return res.json({
            message: 'Successfully saved skill to the database'
        })
    })
}
function list(req, res) {
    const user = req.params.user_id;
    Skill.findOne({user}, (err, response) => {
        if (err) {
            return res.status(201).json({
                message: 'Error Skill Experience details of the user',
                error: err
            })
        }
        return res.json({
            message: 'The Skill details of the user',
            data: response
        })
    })
}

export { save, list };
