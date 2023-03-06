const mongoose = require('mongoose');
const object_Id = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema({
    img: {  data: Buffer, contentType: String },
    name: { type: String, required: true },

    author_id: { type: object_Id, ref: "author" },
    category_id: { type: object_Id, ref: "category" },
    reviews:[{
        user_id:{type:object_Id,ref:"user"},
        rate:{type:Number},
        comment:{type:String}
    }]
})

const bookModel= mongoose.model('books',bookSchema);
module.exports=bookModel;