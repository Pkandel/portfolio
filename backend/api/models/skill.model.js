import mongoose from 'mongoose';
const Schema = mongoose.Schema;
let AutoIncrement = require('mongoose-sequence');
const skill_levels = ['advanced', 'below_advanced', 'above_intermediate', 'intermediate', 'below_intermediate', 'junior'];

const skillSchema = new Schema ({
    skill: [{
        name: { type: String, required: true },
        level: { type: String, required: true, enum: skill_levels }
    }],
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    created_on: { type: Date, required: true, default: new Date()},
    modified_on: { type:Date, required: true },
    isPublic: { type: Boolean, required: true, default: true }
    
});

skillSchema.plugin(AutoIncrement, {inc_field: 'skill_id'});
export default mongoose.model('Skill', skillSchema);
