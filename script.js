let myLibrary = [];

function Book(book) {
  this.title = book.title || "Unknown";
  this.author = book.author || "Unknown";
  this.pages = book.pages || "Unknown";
}

function addBookToLibrary() {
  toggleForm();
  let info = {};
  info.title = document.querySelector("#title").value;
  info.author = document.querySelector("#author").value;
  info.pages = document.querySelector("#pages").value;
  let book = new Book(info);
  return myLibrary.push(book), addBookToPage(book);
}

function addBookToPage(book) {
  let cardContainerDiv = document.querySelector(".cardContainer");
  let div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `<p> Title: ${book.title} </p> <p> Author: ${book.author} </p> <p> Pages: ${book.pages} </p> <p class="delete">x</p>`;
  cardContainerDiv.appendChild(div);
}
const deleteButton = document.querySelector(".deleteButton");
deleteButton.addEventListener("click", removeBook);

const form = document.querySelector("form");
const formButton = document.querySelector("#formButton");
form.addEventListener("submit", addBookToLibrary);
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

const addABookButton = document.querySelector("#addABookButton");
addABookButton.addEventListener("click", toggleForm);
const modal = document.querySelector(".modal");
modal.style.display = "none";
function toggleForm() {
  modal.style.display == "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");
}
