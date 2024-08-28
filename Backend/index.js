const express = require( 'express' );
const db = require('./dbConnection');
const app = express();
const port = 3000;

const bookRoute = require('./routes/booksroute');

// Middleware for parsing request body

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial bhai kaisa hain');
  });

app.use('/book', bookRoute);


app.listen(port, ()=>{
    console.log(`app is listining on ${port}` )
});