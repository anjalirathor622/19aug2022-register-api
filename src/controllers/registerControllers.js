const { User } = require("../model/user");
const bcrypt = require("bcrypt")


//HOF
let registerController = function(req,res){

    //Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});
    User.findOne({ email:req.body.email,username:req.body.username},function (err,user){
        console.log(user)
        if(user === null){
            

            console.log(req.body.password_hash);
            const saltRounds = 10;
            let encryptedpassword = bcrypt.hashSync(req.body.password_hash, saltRounds);;
            req.body.password_hash = encryptedpassword;


        //db incertion
        const user = new User(req.body);
            user.save().then(d => {
                res.status(200).json({
                    msg:'User registed successfully',
                    data:req.body
                });
            }).catch(e=>{
                res.status(400).json({
                    msg:'error'
                });
            });
            
        }else{
            res.status(404).json({
                msg:'User is already registerd'
            });
        }
    })
}


module.exports = {registerController}