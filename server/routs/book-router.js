const bookRouter = require('express').Router()
const BookCtrl = require('../controllers/book-ctrl')

bookRouter.post('/',BookCtrl.createBook)
bookRouter.get('/id/:id',BookCtrl.getBookById)
bookRouter.put('/update/:id',BookCtrl.updateBook)

module.exports = bookRouter;

