const bookModel = require('../models/book-model');
const BookModel = require('../models/book-model');

function createBook(req,res) {
    
        const body = req.body;
        if(!body){
            return res.status(400)
            .json({sucsses:false,massege:"no body found"})
        }
        const book = new BookModel(body);
        if (!book) {
            return res.status(400)
            .json({sucsses:false,massege:"no book found"})
        }
        book.save()
        .then(()=>{
            return res.status(200)
            .json({sucsses:true,massege:"book saved"})
        })
        .catch(error => {
            return res.status(401)
            .json({sucsses:false,massege:"book not saved"})
        })
}
async function getBookById(req,res){
    await bookModel.findById(req.params.id,(err,bookItem)=>{
if(err){
    res.status(400).json({sucsses:false,error:err})
}
if(!bookItem){
    res.status(404).json({sucsses:false,massege:"no book available"})
}
res.status(200).json({sucsses:true,data:bookItem})
    })
}
async function updateBook(req,res){
    await bookModel.findByIdAndUpdate(req.params.id,req.body,(err,bookItem)=>{
if(err){
    res.status(400).json({sucsses:false,error:err})
}
res.status(300).json({sucsses:true,data:doc,massege:"book update sucssesfully"})
    })
}
module.exports = {
    createBook,
    getBookById,
    updateBook
}
