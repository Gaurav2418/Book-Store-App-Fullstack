# Book Store Application
The Book Store application is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This application manages information related to Books. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for managing book data (Title, Author, Book Publish Year, Last updated TimeStamp).

# Endpoints
### Add a Book
-Endpoint: POST /book
-Description: Adds a book to the system with details such as Title, Author, Book Publish Year, etc.

### Get All Books
-Endpoint: GET /book
-Description: Retrieves a list of all books in the system.

### Get book by ID
-Endpoint: GET /book/:id
-Description: Retrieves a book based on their ID.

### Update a Book
-Endpoint: PUT /book/:id
-Description: Updates the details of a specific book identified by its ID.

### Delete a Book
-Endpoint: DELETE /book/:id
-Description: Deletes a book from the system based on its ID.

