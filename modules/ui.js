import BookLocalStore from './localStore.js';

class UI {
  static displayBooks() {
    const books = BookLocalStore.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const bookList = document.querySelector('.book-list');
    const bookDetails = document.createElement('div');
    bookDetails.className = 'books'
    bookDetails.innerHTML = `
            <div class ="book-details">
            <span>${book.title}</span>
            <span>${book.author}</span>
            <span><a href='#' class="remove-btn">Remove</a></span>
            <div>
        `;
    bookList.appendChild(bookDetails);
  }

  static alertMessage(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const body = document.querySelector('body');
    const form = document.querySelector('.form-section');
    body.insertBefore(div, form);

    // Disappear in 0.5 second
    setTimeout(() => document.querySelector('.alert').remove(), 500);
  }

  //removing a book
  static deleteBook(removed) {
    if (removed.classList.contains('remove-btn')) {
      removed.parentElement.parentElement.remove();
    }
  }

  static cleaFields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}

export default UI;
