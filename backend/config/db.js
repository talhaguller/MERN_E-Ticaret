const mongoose = require('mongoose')

const db = ()=> {
    mongoose.connect('mongodb+srv://talha:123456.@cluster0.g30k2rl.mongodb.net/'
    ).then(()=>{
        console.log("mongoDB connected !!!");
    }).catch((err) =>{
        console.log(err);
    })
}

module.exports=db