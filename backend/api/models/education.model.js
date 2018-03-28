import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence');

const educationSchema = new Schema ({
    course_name: { type: String, required: true},
    college_name: { type: String, required: true},
    start_date: { type: Date, required: true },
    end_date: { type: Date, default: new Date() },    
    course_description: String,
    picture: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    
});
educationSchema.plugin(AutoIncrement, {inc_field: 'education_id'});

export default mongoose.model('Educatioin', educationSchema);