import about from '../models/about.model.js';

function save(req, res) {
    const user = req.params.user_id;
    const { title, company_name, description, link } = req.body;
    const about_me = new about({
        title,
        company_name,
        description,
        link,
        user
    });
    about_me.save((err, response) => {
        if(err) throw err;
        return res.json({
            message: 'Successfully saved into the database',
            data: null 
        })
    })
}

export { save };
