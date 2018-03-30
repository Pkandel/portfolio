import about from '../models/about.model.js';
import { upload } from '../helpers';
function save(req, res) {
    const user = req.params.user_id;
    upload.single('profile')(req, res, (err) => {
        if(err) {
            return res.json({
                message: 'Error uploading profile picture.',
                error: err
            })
        }
        console.log(req.query);
        const { title, company_name, description, linkedin } = req.body;
        const about_me = new about({
            title,
            company_name,
            description,
            link: { linkedin },
            user,
            picture: `/uploads/${req.file.filename}`
        })
        about_me.save((err, response) => {
            if(err) {
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
    })

}

export { save };
