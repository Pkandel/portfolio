import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const TechEnum = ['Front End', 'Back End', 'Mobile IOS', 'Mobile Android', 'Dev Ops', 'Database', 'Other'];
const noteEnum = ['note', 'blog', 'both'];
const attributeSchema = new Schema ({
    title: { type: String, required: true},
    description: {type: String, required: true},
    category:{ type: String, enum: TechEnum },
    heading: String,
    isPublic: { type: Boolean, required: true, default: true },
    type: { type: String, enum: noteEnum, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    base: { type: Schema.Types.ObjectId, ref: 'BaseEntity'},
    created_on: { type: Date, required: true, default: new Date()},
    modified_on: { type:Date, required: true },

});

export default mongoose.model('Attribute', attributeSchema);