import attribute from '../models/attribute.model.js';
function save(req, res) {
    const { user_id: user, base_id: base } = req.params;
    const { title, description, category, type, heading, isPublic } = req.body;
    const modified_on = new Date();
    const _attribute = new attribute({
        title,
        description,
        isPublic,
        user,
        category,
        type,
        base,
        heading,
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

function list(req,res) {
    const { user_id: user, base_id: base } = req.params;
    let { attribute: title } = req.query;
    title = title.replace(/-/g, ' ');
    console.log(title)
    attribute.find({ user, base, title: { $regex: new RegExp(title, 'i')} })
    .exec(function(err, attr) {
            if(err) return res.json({ message: "Error fetching Attribute"});
            return res.json({
                message: "List of Attributes.",
                data: attr
            })
        })
}

export { save, list };
