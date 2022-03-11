const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    if (req.addnewname != null) {
        let out = req.addnewname;
        res.send('Hello' + " " + out);
    } else {
        res.send('please sign in first!');
    }
});



module.exports = router;