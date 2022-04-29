class BookLocalStore {
  static getBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    return books;
  }

  static addBook(book) {
    const books = BookLocalStore.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(tar) {
    const books = BookLocalStore.getBooks();
    const found = books.findIndex((book) => book.title === tar.title && book.author === tar.author);
    books.splice(found, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default BookLocalStore;