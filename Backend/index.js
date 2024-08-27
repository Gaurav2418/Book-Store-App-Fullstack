const express = require( 'express' );

const app = express();
const port = 3000;


// app.get('/', (request, response) => {
//     console.log(request);
//     return response.status(234).send('Welcome To MERN Stack Tutorial');
//   });


app.listen(port, ()=>{
    console.log(`app is listining on ${port}` )
});