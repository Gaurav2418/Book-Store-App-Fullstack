const express = require('express')
const BookModel  = require('../models/bookModel.js');

const router = express.Router();

router.post('/', async(request, response) => {
    try{
        // validating if request is made correctely with all the required data
        if (
            !request.body.title ||
            !request.body.author ||
            !request.body.publishYear
          ) {
            return response.status(400).send({
              message: 'Send all required fields: title, author, publishYear',
            });
          }

        //   extracting all the data from request body and saving it in variable 'newBook'
          const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
          };
          
        //   using 'BookModel' and .create() method provided by mongoose to create and save a new document in the database
          const book = await BookModel.create(newBook);
      
          return response.status(201).send(book);

    }
    catch(error){
        response.status(500).json({message: error.message})
    }
})


// Route for Get All Books from database
router.get('/', async (request, response) => {
    try {
      const books = await BookModel.find({});
  
      return response.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });


module.exports = router;