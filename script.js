let myLibrary = [];

function Book(book) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function addBookToLibrary() {
  let info = "";
  info.title = document.querySelector("#title").value;
  info.author = document.querySelector("#author").value;
  info.pages = document.querySelector("#pages").value;
  let book = new Book(info);
  myLibrary.push(book);
  console.log(book, myLibrary);
}
