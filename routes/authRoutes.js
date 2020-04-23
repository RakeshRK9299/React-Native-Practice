const express = require('express')

const mongoose = require('mongoose')

const router = express.Router();
const User= mongoose.model('User');

router.post('/signup',async(req, res)=>{
    console.log(req.body)

    const {email,password} = req.body;
    try{
        const user = new User({email, password});
        await user.save();
        res.send('posted')
    }catch(err) {
        res.status(422).send(err.message);
    }
})


module.exports = router