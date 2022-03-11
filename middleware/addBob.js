const express = require('express');


let addNewName = (req, res, next) => {


    if (req.query.name) {
        req.addnewname = req.query.name.trim().toLowerCase();
    } else {
        req.addnewname = null;
    }

    next();

};


module.exports = addNewName;