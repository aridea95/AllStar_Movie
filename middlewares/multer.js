const multer = require('multer');

const fileFilter = (req,file,cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}


const storageUser = multer.diskStorage({
    destination: function (req, file, cb) {
        cb (null, './public/users');
    },
    filename: function(req, file, cb){
        cb(null, `${file.originalname}`);
    }
});

const storageMovie = multer.diskStorage({
    destination: function (req, file, cb) {
        cb (null, './public/posters');
    },
    filename: function(req, file, cb){
        cb(null, `${file.originalname}`);
    }
});

const storageChar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb (null, './public/chars');
    },
    filename: function(req, file, cb){
        cb(null, `${file.originalname}`);
    }
});

const uploadPictUser = multer({
    storage: storageUser,
    // fileFilter: fileFilter
})

const uploadPictMovie = multer({
    storage: storageMovie,
    fileFilter: fileFilter
})

const uploadPictChar = multer({
    storage: storageChar,
    // fileFilter: fileFilter
})

module.exports = { uploadPictUser, uploadPictMovie, uploadPictChar }
    