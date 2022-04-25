const addBookBtn = document.querySelector(".add-btn");
const booksSection = document.querySelector(".books");
const switchOption = document.querySelectorAll('.switch-toggle input');


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
    let read = document.querySelector('input[name="read-progress"]:checked').value;
    
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

    let toggleSwitch = '<div class="switch-toggle"><input type="radio" class="" id="toggle-read" name="toggle-read" ><label for="toggle-read"  checked="">READ</label><input type="radio" class="checked" id="toggle-in-progress" name="toggle-in-progress" checked="" ><label for="toggle-in-progress">IN PROGRESS</label><input type="radio" class="" id="toggle-unread" name="toggle-unread"><label for="toggle-unread" checked="" >UNREAD</label></div>'

    
    bookCard.append(author, title, pages);
    bookCard.insertAdjacentHTML("beforeend", toggleSwitch);

    booksSection.append(bookCard);

    myLibrary.forEach((book) => {

        author.textContent = 'Author: ' + book.author;
        title.textContent = 'Title: ' + book.title;
        pages.textContent = 'Pages: ' + book.pages;
        if(book.read.value === 'in-progress') 
        // if(book.read) read.textContent = 'Read';
        // if(!book.read) read.textContent = 'Unread';

        bookCard.setAttribute('data-index-number', book.indexNum);
    })
}

//////////////////////////////////
// Toggle switch functionality

switchOption.forEach(e => {

    e.addEventListener('click', ()=> {
        console.log('I was clicked!'); 

        // Remove checked class from all options
        switchOption.forEach(e => {
            e.classList.remove('checked')
        })

        // Add checked class to the clicked option
        e.classList.add('checked');
        console.log('class added to', this)
        
    });

});
