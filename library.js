// Modal functionality
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-book-btn');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});


// eslint-disable-next-line prefer-const
let myLibrary = [];

function Book(title, author, pages, published, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.status = status;
}

// Adding book object to array
const addBookForm = document.querySelector('.add-book-form');

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const publishedDate = document.querySelector('#published-date').value;
  const readStatus = document.querySelector('#read-status').value;

  const book = new Book(title, author, pages, publishedDate, readStatus);
  myLibrary.push(book);
  addBookForm.reset();
  modal.close();
});

// Showing library array in main display
function iterateBooks() {
  const booksMain = document.querySelector('.books');

  for (book of myLibrary) {
    const unreadCard = document.createElement('div');
    unreadCard.classList.add('unread-card')
    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    const bookTitle = document.createElement('p');
    bookTitle.classList.add('book-title');

    booksMain.appendChild(unreadCard);
    unreadCard.appendChild(bookInfo);
    unreadCard.appendChild(cardButtons);
    bookInfo.appendChild(bookTitle);
  }
}