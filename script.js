let myLibrary = [];

function Book(book) {
  this.author = book.author;
  this.title = book.title;
  this.pages = book.pages;
}

function addBookToLibrary() {
  let info = {};
  info.title = document.querySelector("#title").value;
  info.author = document.querySelector("#author").value;
  info.pages = document.querySelector("#pages").value;
  let book = new Book(info);
  myLibrary.push(book);
  console.log(book, myLibrary);
}

const form = document.querySelector("form");
const formButton = document.querySelector("#formButton");
form.addEventListener("submit", addBookToLibrary);
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
