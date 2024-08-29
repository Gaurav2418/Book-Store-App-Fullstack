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


// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await BookModel.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  

  // Route for Update a Bookby id
  router.put('/:id', async (request, response) => {
    try {
        if(!request.body.title||
            !request.body.author||
            !request.body.publishYear
        ){
            return response.status(400).json({ message: "Please fill all fields: title, author, publishYear" })
        }
        const { id } = request.params;
        const result = await BookModel.findByIdAndUpdate(id, request.body);
        if(!result){
            return response.status(404).json({ message: "Book not found" });
        }
        return response.status(200).send('Book Updated Successfully');
    }
    catch{
             response.status(400).json({message: "Invalid request"});
         }
})


    // Route for Delete a book
router.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await BookModel.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  

module.exports = router;