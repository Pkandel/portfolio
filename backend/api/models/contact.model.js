import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema ({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
    
})

export default mongoose.model('Contact', contactSchema);