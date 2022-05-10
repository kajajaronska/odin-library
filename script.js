const addBookBtn = document.querySelector(".add-btn");
const booksSection = document.querySelector(".books");
const bookCard = document.querySelectorAll(".book-card");

const form = document.querySelector("form");

let myLibrary = [];

let indexNumCounter = 0;

// Object contructor for the book

function Book(author, title, pages, read, indexNum) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.indexNum = indexNum;
}

addBookBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();

  indexNumCounter++;

  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let read = document.querySelector(
    'input[name="read-progress"]:checked'
  ).value;

  myLibrary.push(new Book(author, title, pages, read, indexNumCounter));

  createBookCard();

  resetForm();

  return;
}

function createBookCard() {
  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  let author = document.createElement("div");
  author.classList.add("author");

  let title = document.createElement("div");
  title.classList.add("title");

  let pages = document.createElement("div");
  pages.classList.add("pages");

  let toggleSwitch =
    '<div class="switch-toggle"><input type="radio" id="toggle-read" name="toggle-read" ><label id="label-toggle-read" for="toggle-read">READ</label><input type="radio" id="toggle-in-progress" name="toggle-in-progress"><label id="label-toggle-in-progress" for="toggle-in-progress">IN PROGRESS</label><input type="radio" id="toggle-unread" name="toggle-unread"><label id="label-toggle-unread" for="toggle-unread" >UNREAD</label></div>';


  let removeBtn = '<button type="button" class="remove-button" title="Remove from the library">-</button>'
  
  bookCard.append(author, title, pages);
  bookCard.insertAdjacentHTML("beforeend", toggleSwitch);
  bookCard.insertAdjacentHTML("beforeend", removeBtn);


  booksSection.append(bookCard);

  bookCard.setAttribute("data-index-number", indexNumCounter);

  //   Add content from the form into a book card
  let book = myLibrary[indexNumCounter - 1];

  author.textContent = "Author: " + book.author;
  title.textContent = "Title: " + book.title;
  pages.textContent = "Pages: " + book.pages;

  // console.log(book.read, book);

  // Marking relevant read status on the progress bar

  if (book.read === "in-progress") {
    let checked = document.querySelector(
      `[data-index-number="${book.indexNum}"] div.switch-toggle input#toggle-in-progress`
    );

    checked.classList.add("checked");
  }
  if (book.read === "read") {
    let checked = document.querySelector(
      `[data-index-number="${book.indexNum}"] div.switch-toggle input#toggle-read`
    );

    checked.classList.add("checked");
  }
  if (book.read === "unread") {
    let checked = document.querySelector(
      `[data-index-number="${book.indexNum}"] div.switch-toggle input#toggle-unread`
    );

    checked.classList.add("checked");
  }
}

// Resetting form fiels after submitting

const resetForm = function () {
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
};

//////////////////////////////////
// Toggle switch functionality

document.addEventListener("click", function (e) {

  if (e.target.id === "label-toggle-unread") {
    let bookIndexNum = e.composedPath()[2].dataset.indexNumber;

    // Update read status in myLibrary array
    myLibrary[bookIndexNum - 1].read = "unread";

    // Update read status display
    let unread = document.querySelector(
      `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-unread`
    );
    let read = document.querySelector(
      `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-read`
    );

    let inProgress = document.querySelector(
      `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-in-progress`
    );

    unread.classList.add("checked");
    read.classList.remove("checked");
    inProgress.classList.remove("checked");
  }

  if (e.target.id === "label-toggle-read") {
    let bookIndexNum = e.composedPath()[2].dataset.indexNumber;

    // Update read status in myLibrary array
    myLibrary[bookIndexNum - 1].read = "read";

    // Update read status display
    let unread = document.querySelector(
      `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-unread`
    );
    let read = document.querySelector(
      `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-read`
    );

    let inProgress = document.querySelector(
      `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-in-progress`
    );

    unread.classList.remove("checked");
    read.classList.add("checked");
    inProgress.classList.remove("checked");
  }

  if (e.target.id === "label-toggle-in-progress") {
    
      let bookIndexNum = e.composedPath()[2].dataset.indexNumber;

      // Update read status in myLibrary array
      myLibrary[bookIndexNum - 1].read = "in-progress";

      // Update read status display

      let unread = document.querySelector(
        `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-unread`
      );
      let read = document.querySelector(
        `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-read`
      );

      let inProgress = document.querySelector(
        `[data-index-number="${bookIndexNum}"] div.switch-toggle input#toggle-in-progress`
      );

      unread.classList.remove("checked");
      read.classList.remove("checked");
      inProgress.classList.add("checked");
    }

    if (e.target.className === "remove-button") {
      console.log("button was clicked, yay!")

      // Implement removing card from the library function;
    }
    
  });
