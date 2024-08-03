const express=require('express');
const app=express();
const Ticket=require('./db/schema')
const router=express.Router();
const cors=require('cors');
router.use(cors());
router.use(express.json());

router.post('/booking',async(req,res)=>{
    const {movie,slot,seats}=req.body;
    try{
        const my_data=new Ticket({
            movie,slot,seats
        })
        await my_data.save();
        return res.status(200).json({data:my_data,message:'Booking Successful'});
    }
    catch(err){
        return res.status(500).json({data:null,message:'There was a prolem while booking.PLease Try again'});
    }
})

router.get('/booking',async(req,res)=>{
    const data=await Ticket.find({}).sort({_id:-1}).limit(1);
    try{
        if(data.length===0){
            return res.status(200).json({msg:"There is no data present"});
        }
        else{
            return res.status(200).json({data:data[0],msg:'Successfully got data'})
        }
    }
    catch(err){
        return res.status(500).json({msg:err});
    }
    
})

module.exports=router

