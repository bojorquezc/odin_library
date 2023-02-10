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

// Adding book object to array

const addBookForm = document.querySelector('.add-book-form');

// eslint-disable-next-line prefer-const
let myLibrary = [];

function Book(title, author, pages, published, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.status = status;
}

addBookForm.addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const publishedDate = document.querySelector('#published-date').value;
  const readStatus = document.querySelector('#read-status').value;

  const book = new Book(title, author, pages, publishedDate, readStatus);
  myLibrary.push(book);
});

// function addBookToLibrary(book) {
//   myLibrary.push(book);
// }
