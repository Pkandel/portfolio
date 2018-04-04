import baseEntity from '../models/base_entity.model.js';
function save(req, res) {
    const user = req.params.user_id;
    const { title, description } = req.body;
    let { isPublic } = req.body;
    console.log(isPublic)
    isPublic = isPublic === undefined ? true : isPublic;
    const modified_on = new Date();
    const base_entity = new baseEntity({
        title,
        description,
        isPublic,
        user,
        modified_on 
    })
    base_entity.save((err, response) => {
        if (err) {
            return res.status(201).json({
                message: 'Error Saving Base Entity data into database',
                error: err
            })
        }
        return res.json({
            message: 'Successfully saved Base Entity into the database',
            data: response
        })
    })
}

function list(req,res) {
    const user = req.params.user_id;
    let { title } = req.query;
    const cond =  title === undefined ? { user } : {title: { $regex: new RegExp(title.replace(/-/g, ' '), "i")}};
    baseEntity.find(cond)
    .exec(function(err, entity) {
        console.log(entity)
            if(err) return res.json({ message: "Error fetching baseEntity"});
            return res.json({
                message: "List of Base Entity.",
                data: entity
            })
        })
}

export { save, list };
