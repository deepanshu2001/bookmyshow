const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    movie:{
        type:String,
    },
    slot:{
        type:String
    },
    seats:{
        A1:{
            type:Number
        },
        A2:{
            type:Number
        },
        A3:{
            type:Number
        },
        A4:{
            type:Number
        },
        A5:{
            type:Number
        },
        A6:{
            type:Number
        },
        D1:{
            type:Number
        },
        D2:{
            type:Number
        },
    }
})

const Ticket=mongoose.model('bookmovie',schema);
module.exports=Ticket;