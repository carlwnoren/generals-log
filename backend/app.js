import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

app.get("/", async (req,res) => {
    const campaign = req.body; //request from the user

    if(!campaign.name) {
        return res.status(400).json({ sucess:false, message: "Please complete required fields" });
    }

    const newCampaign = new Campaign(campaign)

    try {
        await newCampaign.save();
        res.status(201).json({ sucess:true, data:newCampaign});
    } catch (error) {
        console.error("Error: unable to create Campaign:", error.message);
    }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})