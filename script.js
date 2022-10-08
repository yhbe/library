let myLibrary = [];

class Book {
  constructor(book) {
    this.title = book.title || "Unknown";
    this.author = book.author || "Unknown";
    this.pages = book.pages || "Unknown";
    this.read = book.read;
    this.id = Math.random();
  }
  get changeStatus() {
    return this.read == true ? (this.read = false) : (this.read = true);
  }
}

function addBookToLibrary() {
  toggleForm();
  let info = {};
  info.title = document.querySelector("#title").value;
  info.author = document.querySelector("#author").value;
  info.pages = document.querySelector("#pages").value;
  info.read = document.querySelector("#checkbox").checked;
  let book = new Book(info);
  return myLibrary.push(book), addBookToPage(book);
}

function addBookToPage(book) {
  form.reset();
  let cardContainerDiv = document.querySelector(".cardContainer");
  let div = document.createElement("div");
  book.read == true
    ? (div.style.backgroundColor = "pink")
    : (div.style.backgroundColor = "red");
  div.setAttribute("class", "card");
  myLibrary.forEach((book) => {
    div.innerHTML = `<p> Title: ${book.title} </p> <p> Author: ${book.author} </p> <p> Pages: ${book.pages} </p>`;
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = "x";
    deleteButton.addEventListener("click", function (event) {
      event.target.parentNode.remove();
      myLibrary.splice(myLibrary.indexOf(book), 1);
    });
    div.append(deleteButton);

    let readStatus = document.createElement("span");
    readStatus.innerHTML = `<label for="accept">Read Status:</label>
  `;
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "bookStatus");
    checkBox.checked = book.read;
    checkBox.addEventListener("click", function () {
      book.changeStatus;
      book.read == true
        ? (div.style.backgroundColor = "pink")
        : (div.style.backgroundColor = "red");
    });
    readStatus.append(checkBox);
    div.append(readStatus);
    cardContainerDiv.appendChild(div);
  });
}

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
