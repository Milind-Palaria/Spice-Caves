const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    mail:{type:String,required:true,unique:true},
    name:{type:String,required :true,},
    password:{type:String,required :true},
    phone:{type:String,required: true,unique:true},
    address:{type:String, requied:true}
},
{collection:'users'})

const model=mongoose.model('UserSchema',UserSchema)
module.exports=model