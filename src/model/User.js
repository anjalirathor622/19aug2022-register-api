const { mongoose } = require("../config/db");


let userSchema = {
    firstname:{
        type: String,
        required: true,
        description:'please enter your firstname'
    },
    lastname:{
        type: String,
        required: true,
        description:'please enter your lastname'
    },
    email:{
        type: String,
        required: true,
        description:'please enter your email'
    },
    username:{
        type: String,
        required: true,
        description:'please enter  valid username'
    },
    password_hash:{
         type: String,
        required: true,
        description:'please enter correct password'
    },
    role:{
        type: String,
        required: true,
    }
        
}

const User = mongoose.model("User",userSchema);


exports.User=User