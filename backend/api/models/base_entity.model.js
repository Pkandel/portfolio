import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const baseEntitySchema = new Schema ({
    title: { type: String, required: true},
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    created_on: { type: Date, required: true, default: new Date()},
    modified_on: { type:Date, required: true }
});

export default mongoose.model('BaseEntity', baseEntitySchema);
