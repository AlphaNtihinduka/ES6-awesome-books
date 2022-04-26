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
        const booksStore = [
            {
                title: "Expect love",
                author: "Romeo",
            },

            {
                title: "The yu",
                author: "Mk",
            },

            {
                title: "The amin",
                author: "Mk",
            },

        ];

    const books = booksStore;
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

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add book
bookForm = document.querySelector(".books-form");
bookForm.addEventListener("submit", (e)=>{
    //Grabbing form values
    const title = document.querySelector(".title").value;
    const author = document.querySelector(".author").value;

    if(title === "" || author === ""){
        
    }else{
     // instatiate book
     const book = new Book(title, author);
    
     //add book to UI
     UI.addBookToList(book);
 
     //clear fields
     UI.cleaFields()
 
     //Prevent page reload
     e.preventDefault();
    }

})

//Event: Remove book
document.querySelector(".book-list").addEventListener("click", (e)=>{
    UI.deleteBook(e.target);
})
