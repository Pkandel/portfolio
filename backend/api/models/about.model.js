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
    picture: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.model('About', aboutSchema);
