import {listHeader, addHeader, contactHeader, formSection, booksHolder, contactSection, bookForm, timeContainer} from './modules/variables.js';
import UI from './modules/ui.js';
import BookLocalStore from './modules/localStore.js';
import displayClock from './modules/clock.js';
//Book class: represents a class
class Book {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
}

// Event: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add book
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

listHeader.addEventListener("click", ()=>{
    booksHolder.style.display = "flex";
    formSection.style.display = "none";
    contactSection.style.display = "none";
})

addHeader.addEventListener("click", ()=>{
    booksHolder.style.display = "none";
    formSection.style.display = "flex";
    contactSection.style.display = "none";
})

contactHeader.addEventListener("click", ()=>{
    booksHolder.style.display = "none";
    formSection.style.display = "none";
    contactSection.style.display = "flex";
})

// function displayClock() {
//     const date =  DateTime.now();
//     const month = date.monthLong;
//     let days = date.day;
//     const yrs = date.year;
//     let hrs = date.hour;
//     let mins = date.minute;
//     let secs = date.second
//     let period = 'AM';
//     if (hrs === 0) {
//       hrs = 12;
//     } else if (hrs > 12) {
//       hrs -= 12;
//       period = 'PM';
//     }
//     if (days === 1) {
//       days = `${days}st`;
//     } else if (days === 2) {
//       days = `${days}nd`;
//     } else if (days === 3) {
//       days = `${days}rd`;
//     } else {
//       days = `${days}th`;
//     }
//     hrs = hrs < 10 ? `0${hrs}` : hrs;
//     mins = mins < 10 ? `0${mins}` : mins;
//     secs = secs < 10 ? `0${secs}` : secs;
  
//     const time = `${days}/ ${month} ${yrs} ${hrs}:${mins}:${secs}  ${period}`;
//     setInterval(displayClock, 1000);
  
//     timeContainer.innerHTML = time;
//   }
  
  displayClock();
  

