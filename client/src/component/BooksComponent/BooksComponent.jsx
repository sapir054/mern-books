import React, { useEffect, useState } from "react";
// import { TableComponent, FormComponent } from "../../component";
import { postBook, getAllBooks } from "../../service/BookService";

const BooksComponent = () => {
  const [booksItems, setBooksItems] = useState([]);
  const [name, setName] = useState("");
  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(getBooks, []);

  function getBooks() {
    getAllBooks().then((res) => {
      setBooksItems(res);
    });
  }
  function changeNameInput(event) {
    setName(event.target.value);
  }
  function saveNewBook(event) {
    event.preventDefult();
    const bookItem = { name, numberOfPages };
    postBook(bookItem).then((res) => {
      alert(res.success);
    });
  }
  return (
    <div>
      <h1>books components</h1>
      <div>
        {React.Children.toArray(booksItems.map(book => {return <h3>{book.name}</h3>}))}
      </div>
      <div>
        <form onSubmit={saveNewBook}>
          <label htmlFor="name">name</label>
          <input type="text" onChange={changeNameInput} name="name"/>
          <label htmlFor="numberOfPages">number of pages</label>
          <input type="number" name="numberOfPages"/>
          <button type="submit">save book</button>
        </form>
      </div>
    </div>
  )
};

export default BooksComponent;