import express from "express";
import mongoose from "mongoose";
import connectDB from "./db/db.js";
import 'dotenv/config'
import cors from "cors"


const app = express();

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'], 
}));

app.use(express.json()); 

connectDB()


const formSchema = new mongoose.Schema({
  name: String,
  prize: Number,
  description: String,
  quantity: Number,
},{timestamps: true});

const Form = mongoose.model("Form", formSchema);

app.get("/submit" , async (req,res) => {
    const data = await Form.find()
    res.send(data)
})


app.post("/submit", async (req, res) => {
  try {
    const { name, prize, description, quantity } = req.body;
    const newEntry = new Form({ name, prize, description, quantity });
    await newEntry.save();
    res.status(201).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});


const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
