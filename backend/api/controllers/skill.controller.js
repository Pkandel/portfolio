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

export { save };
