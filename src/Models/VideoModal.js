var mongoose = require('mongoose');
require("dotenv").config()

const VideoModal = new mongoose.Schema({
   point:{
    type:Number,
    default:2
   },
   video:{
    type:String
   }
}, { timestamps: true })

VideoModal.pre(
    'save', async function (next) {
        next()
    }
)
const Adds = mongoose.model("Ads", VideoModal);
module.exports = Adds;