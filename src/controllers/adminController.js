let adminController = (req,res)=>{
    res.status(200).json({
        msg:'ok',
        username:req.username,
        email: req.email,
        role: req.role
    })
}


module.exports = {adminController}