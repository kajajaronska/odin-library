const addBookBtn = document.querySelector(".add-btn");
const booksSection = document.querySelector(".books");


let myLibrary = [

];

let indexNumCounter = 0;


function Book(author, title, pages, read, indexNum) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.indexNum = indexNum;
}


addBookBtn.addEventListener('click', addBookToLibrary);


function addBookToLibrary(e) {
    e.preventDefault();

    indexNumCounter++

    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;
    
    myLibrary.push(new Book(author, title, pages, read, indexNumCounter));

    createBookCard();

    return;

};



function createBookCard(){
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    
    let author = document.createElement('div');
    author.classList.add('author');

    let title = document.createElement('div');
    title.classList.add('title');

    let pages = document.createElement('div');
    pages.classList.add('pages');

    let read = document.createElement('div');
    read.classList.add('read');

    bookCard.append(author, title, pages, read);

    booksSection.append(bookCard);

    myLibrary.forEach((book) => {

        author.textContent = book.author;
        title.textContent = book.title;
        pages.textContent = book.pages;
        if(book.read) read.textContent = 'Read';
        if(!book.read) read.textContetn = 'Unread';

        bookCard.setAttribute('data-index-number', book.indexNum);
    })
}