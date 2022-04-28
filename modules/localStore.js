class BookLocalStore {
  static getBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || []
    return books;
  }

  static addBook(book) {
    const books = BookLocalStore.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // static removeBook(tar) {
  //   console.log(tar)
  //   let books = BookLocalStore.getBooks();
  //   let index = books.findIndex((item) => item.title === tar.title && item.author === tar.author);
  
  //   books.splice(index, 1);
  //   localStorage.setItem("books", JSON.stringify(books)); 
  // }
  static removeBook(tar) {
        const books = BookLocalStore.getBooks();
        let found = null;
        books.forEach((book, index) => {
          if(book.title ===tar.title && book.author === tar.author) {
            found = index;
          }         
        });
          if(found != null) {
            books.splice(found, 1)
          }
         localStorage.setItem("books", JSON.stringify(books));
     }
}

export default BookLocalStore;