const mongoose =require('mongoose');

const idGendratore = new mongoose.Schema ({
     tableType : {type:String,unique:true,index:true},
     lastid:{type:Number,require:true,default:0},
});


module.exports =mongoose.model('idGen',idGendratore);