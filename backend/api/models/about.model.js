import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const aboutSchema = new Schema ({
    title: { type: String, required: true},
    company_name: String,
    description: String,
    link: {
        facebook: String,
        linkedin: { type: String, required: true}
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    created_on: { type: Date, required: true, default: new Date()},
    modified_on: { type:Date, required: true },
    public: { type: Boolean, required: true, default: true }
});

export default mongoose.model('About', aboutSchema);
