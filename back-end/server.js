const express=require('express')
const app=express();
const connectDB=require('./db/db')
const cors=require('cors')
const router=require('./routes')
const PORT=5000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());
app.use('/api',router)
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.listen(PORT,(req,res)=>{
    console.log('App Listneing at port ',PORT)
})