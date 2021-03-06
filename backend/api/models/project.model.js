import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence');

const projectSchema = new Schema ({
    project_name: { type: String, required: true},
    company_name: String,
    project_description: { type: String, required: true}, 
    technology_used: { type: Array, required: true },
    role_description: { type: String, required: true },
    source_code: String,
    demo_url: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    created_on: { type: Date, required: true, default: new Date()},
    modified_on: { type:Date, required: true },
    public: { type: Boolean, required: true, default: true }
    
});

projectSchema.plugin(AutoIncrement, {inc_field: 'project_id'});
export default mongoose.model('Project', projectSchema);
