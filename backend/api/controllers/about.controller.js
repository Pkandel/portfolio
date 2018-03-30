import about from '../models/about.model.js';
import { upload } from '../helpers';
function save(req, res) {
    const user = req.params.user_id;
    const { title, company_name, description, link } = req.body;
    const about_me = new about({
        title,
        company_name,
        description,
        link,
        user
    })
    about_me.save((err, response) => {
        if (err) {
            return res.status(201).json({
                message: 'Error Saving About data into database',
                error: err
            })
        }
        return res.json({
            message: 'Successfully saved into the database',
            data: response
        })
    })
}

export { save };
