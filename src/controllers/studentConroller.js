let studentController = (req,res)=>{
    res.status(200).json({
        
        msg:"ok",
        name:req.body.name,
        surname:req.body.surname,
        myrole:req.role
    });
}

exports.studentController = studentController;