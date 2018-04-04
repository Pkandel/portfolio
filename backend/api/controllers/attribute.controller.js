import attribute from '../models/attribute.model.js';
function save(req, res) {
    const { user_id: user, base_id: base } = req.params;
    const { title, description, category, type } = req.body;
    let { isPublic } = req.body;
    isPublic = isPublic === undefined ? true : isPublic;
    const modified_on = new Date();
    const _attribute = new attribute({
        title,
        description,
        isPublic,
        user,
        category,
        type,
        base,
        modified_on 
    })
    _attribute.save((err, response) => {
        if (err) {
            return res.status(201).json({
                message: 'Error Saving Attribute data into database',
                error: err
            })
        }
        return res.json({
            message: 'Successfully saved Attribute into the database',
            data: response
        })
    })
}

export { save };
