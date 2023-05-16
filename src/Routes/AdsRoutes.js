var express = require("express")
var router = express.Router()
var Controller = require("../Controllers/AdsController")

var AddsPath = "./src/ads";

var multer = require("multer")
var path = require("path")

const storage = multer.diskStorage({
    destination: AddsPath,
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage
});

router.post("/ads_upload",upload.array("vedios",10),Controller.UploadAds)
router.get('/get_ads',Controller.getAds)

module.exports= router