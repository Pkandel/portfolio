import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence');

const experienceSchema = new Schema ({
    job_title: { type: String, required: true},
    company_name: { type: String, required: true},
    start_date: { type: Date, required: true },
    end_date: { type: Date, default: new Date() },    
    job_description: String,
    picture: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    created_on: { type: Date, required: true, default: new Date()},
    modified_on: { type:Date, required: true }
    
});

experienceSchema.plugin(AutoIncrement, {inc_field: 'experience_id'});
export default mongoose.model('Experience', experienceSchema);