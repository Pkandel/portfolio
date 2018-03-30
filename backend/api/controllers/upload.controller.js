
import User from '../models/user.model';
import * as file from '../helpers';

function upload(req, res) {
    const type = req.query.type;
    if (type === 'profile') {
       return uploadUserPicture(req, res);
    }
}
function uploadUserPicture(req, res) {
    file.upload.single('profile')(req, res, (err) => {
    const id = req.params.user_id;
    if (err) {
            return res.json({
                message: 'Error uploading profile picture.',
                error: err
            })
        }
        User.findByIdAndUpdate(id, { img: `/uploads/${req.file.filename}` },{new: true}, (err, response) => {
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
    })
}

export { upload };
