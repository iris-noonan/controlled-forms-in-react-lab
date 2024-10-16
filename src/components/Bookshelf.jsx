// import the useState() hook
import { useState } from 'react';

function Bookshelf() {

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (event) => {
    // create a copy of newBook
    setNewBook({ ...newBook, [event.target.name]: event.target.value})
    // Update the newBook object with the updated field value

    // Set the updated copy as the new value for newBook
  }

  const handleSubmit = (event) => {
    // Prevent form submitting with preventDefault()
    event.preventDefault();
    // Create copy of books array, adding the new book to the end
    const copyBooks = [...books]
    copyBooks.push(newBook)
    // Update the books state
    setBooks(copyBooks)
    // Reset the newBook state to it's default values
    setNewBook({ title: '', author: '' });
  }

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input id="title" 
            name="title" 
            value={newBook.title}
            onChange={handleInputChange}
          />

            <label htmlFor="author">Author: </label>
            <input id="author" 
            name="author" 
            value={newBook.author}
            onChange={handleInputChange}
          />
            <button type="submit">Add Book</button>
          </form>

        </div>
      <div className="bookCardsDiv">
        {books.map(book => {
          return (
            <div class="bookCard" >
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
          )
        })}
      </div>
      </div>
    </>
  )
}

export default Bookshelf