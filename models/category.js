const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    name:{type:String},
    Book_id: [{ type: object_Id, ref: "books" }]
})

const categoryModel= mongoose.model('categories',categorySchema);
module.exports=categoryModel;