import BookLocalStore from "./localStore.js";
class UI {
    static displayBooks(){
    const books = BookLocalStore.getBooks();
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

export default UI
