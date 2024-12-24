const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength:[3,'first name must be at least 3 charates long'],
        },
        lastname:{
            type: String,
            minlength:[3,'last name must be at least 3 charates long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique:true,
        minlength:[5,'email name must be at least 3 charates long'],
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    socketId:{
        type: String,
    },
})

UserSchema.methods.generatAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    return token;
}
UserSchema.methods.comparePassword =async function (password){
    return await bcrypt.compare(password,this.password);
    
}
UserSchema.methods.hashPassword =async function (password){
    return await bcrypt.hash(password,10);
}


const UserModel = mongoose.model('user',UserSchema);

module.exports = UserModel;