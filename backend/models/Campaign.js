import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    orders: {
        type: String,
        required: false
    },
    image: {
        type:String,
        required: false
    },
}, {
    timestamps: true //createdAt, updatedAt
});

const Campaign = mongoose.model('Campaign', campaignSchema);

export default Campaign;