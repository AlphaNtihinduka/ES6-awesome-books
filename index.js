import {
  listHeader, addHeader, contactHeader, formSection, booksHolder, contactSection, bookForm,
} from './modules/variables.js';
import UI from './modules/ui.js';
import BookLocalStore from './modules/localStore.js';
import displayClock from './modules/clock.js';
// Book class: represents a class
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add book
bookForm.addEventListener('submit', (e) => {
  // Grabbing form values
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  if (title === '' || author === '') {
    UI.alertMessage('Please add book details', 'failure');
  } else {
    // instatiate book
    const book = new Book(title, author);

    // add book to UI
    UI.addBookToList(book);

    // add book to localstore
    BookLocalStore.addBook(book);

    // success Message
    UI.alertMessage('Successfully added', 'success');

    // clear fields
    UI.cleaFields();

    // Prevent page reload
    e.preventDefault();
  }
});

// Event: Remove book
document.querySelector('.book-list').addEventListener('click', (e) => {
  const btnElement = e.target;
  const bookDetElement = btnElement.parentElement.parentElement;
  const title = bookDetElement.children[0].textContent;
  const author = bookDetElement.children[1].textContent;

  const bookObject = {
    title,
    author,
  };
  BookLocalStore.removeBook(bookObject);
  UI.deleteBook(e.target);
  UI.alertMessage('Successfully Removed', 'removed');
});

listHeader.addEventListener('click', () => {
  booksHolder.style.display = 'flex';
  formSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addHeader.addEventListener('click', () => {
  booksHolder.style.display = 'none';
  formSection.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactHeader.addEventListener('click', () => {
  booksHolder.style.display = 'none';
  formSection.style.display = 'none';
  contactSection.style.display = 'flex';
});

displayClock();
