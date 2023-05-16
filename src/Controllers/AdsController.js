const Ads = require("../Models/VideoModal")


const UploadAds = async (req,res,next)=>{

    try{
        const vedios = req.files
        const save= vedios.map ((item)=>(
             Ads.create({video:item.filename}).then((result)=>{
               return result
            })
        ))
        res.status(200).json({message:"success",response:save})


    }catch(error){
        console.log(error)
        // res.status(400).json({error:error})
    }
}

const getAds  = async(req,res,next)=>{
    try{
        await Ads.find().then((result)=>{
            res.status(200).json({message:"Success",response:result})
        })


    }catch(error){
        res.status(400).json({error:error})
    }
}



module.exports.handler = {
    UploadAds,
    getAds
}