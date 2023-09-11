let getAllProducts=(req,res)=>{
    res.status(200).json({msg:"ready products"})
}
let getAllProductsTrial=(req,res)=>{
    res.status(200).json({msg:"ready for world"})
}
module.exports={getAllProducts,getAllProductsTrial};