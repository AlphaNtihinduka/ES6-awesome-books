//Book class: represents a class
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author
    }
}

// UI class: Handles all the UI tasks

class UI {
    static displayBooks(){
        const booksStore = [
            {
                title: "Expect love",
                author: "Romeo",
            },

            {
                title: "The amin in operation",
                author: "Mk",
            }

        ];

    const books = booksStore;

    books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(){
        const booKList = document.querySelector(".book-list");
        const bookDetails = document.querySelector(".book-details");
        const title = document.querySelector(".title");
        const author = document.querySelector(".author");
        const deleteBtn = document.querySelector(".delete");
        title.textContent = `
            ${book.title};`;

        author.textContent = `
        ${book.author}`

        author.textContent = `
        ${book.author}`;

        deleteBtn.textContent = `Remove`;

        
    }
}


//store class: Handles the local storage.

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add book

//Event: Remove book