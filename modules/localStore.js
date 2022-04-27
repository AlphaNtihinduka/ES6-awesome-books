class BookLocalStore {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = BookLocalStore.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // static removeBook(tar) {
  //     const books = BookLocalStore.getBooks();

  //     books.forEach((book, index) => {
  //         const books = BookLocalStore.getBooks()
  //         if(book.author === tar) {
  //             books.splice(index, 1);
  //         }
  //     });

  //     localStorage.setItem("books", JSON.stringify(books));
  // }
}
export default BookLocalStore;