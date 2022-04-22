const addBookBtn = document.querySelector(".add-btn");
const booksSection = document.querySelector(".books");


let myLibrary = [
    {
        author: 'Murakami',
        title: 'Norwegian Wood',
        pages: '345',
        read: true
    },

    {
        author: 'Margaret Atwood',
        title: 'The Testaments',
        pages: '390',
        read: true
    },

    {
        author: 'Patrick Süskind',
        title: 'Perfume: The Story of a Murderer',
        pages: '272',
        read: false
    }
];

let myArr = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


addBookBtn.addEventListener('click', addBookToLibrary);

document.addEventListener('click', function(){
    console.log("The clikc was made!");
    createBookCard();
})

function addBookToLibrary(e) {
    e.preventDefault();

    console.log("I was clicked!");

    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value;

    return myLibrary.push(new Book(author, title, pages, read));

};

myLibrary.forEach((book) => {
    
})

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
}