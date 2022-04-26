//Book class: represents a class
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

// UI class: Handles all the UI tasks

class UI {
    static displayBooks(){
    const books = bookLocalStore.getBooks();
    books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book){
        const bookList = document.querySelector(".book-list");
        const bookDetails = document.createElement("div");

        bookDetails.innerHTML = `
            <div class ="book-details">
            <span>"${book.title}" by </span>
            <span>${book.author}</span>
            <span><a href='#' class="remove-btn">Remove</a></span>
            <div>
        `
        bookList.appendChild(bookDetails);
    }

    static alertMessage(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const formSection = document.querySelector('.form-section');
        const form = document.querySelector('.books-form');
        formSection.insertBefore(div, form);
    
        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 1000);

    }

    static deleteBook(removed){
            if(removed.classList.contains = "remove-btn") {
                removed.parentElement.parentElement.remove();
            }
    }

    static cleaFields(){
        document.querySelector(".title").value = "";
        document.querySelector(".author").value = "";
    }
}

//store class: Handles the local storage.
class BookLocalStore {
    static getBooks () {
        let books;
        if(localStorage.getItem("books") === null) {
            books =[];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books
    }

    static addBook(book) {
        const books = BookLocalStore.getBooks();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(book))
    }

    static removeBook(title) {
        const books = BookLocalStore.getBooks();

        books.forEach((book, index)=>{
            if(book.title === title) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem("books", JSON.stringify(book));
    }
}


// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add book
bookForm = document.querySelector(".books-form");
bookForm.addEventListener("submit", (e)=>{
    //Grabbing form values
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;
    if(title === "" || author === ""){
        UI.alertMessage("Please add book details", "failure")
    }else{
     // instatiate book
     const book = new Book(title, author);
    
     //add book to UI
     UI.addBookToList(book);

     //add book to localstore
     BookLocalStore.addBook(book);

     //success Message
     UI.alertMessage("Successfully added", "success");
 
     //clear fields
     UI.cleaFields();
 
     //Prevent page reload
     e.preventDefault();
    }
})

//Event: Remove book
document.querySelector(".book-list").addEventListener("click", (e)=>{
    UI.deleteBook(e.target);
    UI.alertMessage("Successfully Removed", "removed");


})
