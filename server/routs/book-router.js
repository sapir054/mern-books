const bookRouter = require('express').Router()
const BookCtrl = require('../controllers/book-ctrl')

bookRouter.post('/',BookCtrl.createBook)
bookRouter.get('/id/:id',BookCtrl.getBookById)
bookRouter.put('/update',BookCtrl.updateBook)

module.exports = bookRouter;

