/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
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

const booksMain = document.querySelector('.books');

// eslint-disable-next-line prefer-const
let myLibrary = [];

function Book(title, author, pages, published, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.status = status;
}

Book.prototype.read = function () {
  const toggleReadButton = document.querySelectorAll('.toggle-read-btn');
  toggleReadButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent === 'Not Read') {
        button.textContent = 'Read';
        button.classList.remove('not-read-btn');
        button.classList.add('read-btn');
      } else {
        button.textContent = 'Not Read';
        button.classList.remove('read-btn');
        button.classList.add('not-read-btn');
      }
    });
  });
};

Book.prototype.removeBook = function () {
  const deleteButton = document.querySelectorAll('.delete-btn');
  deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSetTitle = button.dataset.booktitle;
      myLibrary.forEach((book) => {
        const bookIndex = myLibrary.indexOf(book);
        if (dataSetTitle === book.title) {
          myLibrary.splice(bookIndex, 1);
        }
        booksMain.replaceChildren();
        displayBook();
        Book.prototype.read();
        Book.prototype.removeBook();
      });
    });
  });
};

// Showing library array in main display
function displayBook() {
  for (book of myLibrary) {
    const unreadCard = document.createElement('div');
    unreadCard.classList.add('unread-card');
    unreadCard.dataset.booktitle = book.title;
    booksMain.appendChild(unreadCard);

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
    unreadCard.appendChild(bookInfo);

    const bookTitle = document.createElement('p');
    bookTitle.classList.add('book-title');
    bookInfo.appendChild(bookTitle);

    const divider = document.createElement('hr');
    bookInfo.appendChild(divider);

    const bookAuthorContainer = document.createElement('p');
    bookInfo.appendChild(bookAuthorContainer);
    bookAuthorContainer.textContent = 'By: ';
    const bookAuthor = document.createElement('span');
    bookAuthor.classList.add('book-author');
    bookAuthorContainer.appendChild(bookAuthor);

    const bookPagesContainer = document.createElement('p');
    bookInfo.appendChild(bookPagesContainer);
    bookPagesContainer.textContent = 'Pages: ';
    const bookPages = document.createElement('span');
    bookPages.classList.add('book-pages');
    bookPagesContainer.appendChild(bookPages);

    const bookPublishedContainer = document.createElement('p');
    bookInfo.appendChild(bookPublishedContainer);
    bookPublishedContainer.textContent = 'Published in: ';
    const bookPublished = document.createElement('span');
    bookPublished.classList.add('book-published');
    bookPublishedContainer.appendChild(bookPublished);

    const cardButtons = document.createElement('div');
    cardButtons.classList.add('card-buttons');
    unreadCard.appendChild(cardButtons);

    // eslint-disable-next-line no-shadow
    const toggleReadButton = document.createElement('button');
    cardButtons.appendChild(toggleReadButton);
    toggleReadButton.classList.add('toggle-read-btn');
    toggleReadButton.classList.add('not-read-btn');
    toggleReadButton.dataset.booktitle = book.title;
    toggleReadButton.textContent = 'Not Read';

    const editButton = document.createElement('button');
    cardButtons.appendChild(editButton);
    editButton.classList.add('edit-btn');
    const editIcon = document.createElement('i');
    editButton.appendChild(editIcon);
    editIcon.classList.add('fa-solid');
    editIcon.classList.add('fa-pen-to-square');

    const deleteButton = document.createElement('button');
    cardButtons.appendChild(deleteButton);
    deleteButton.classList.add('delete-btn');
    deleteButton.dataset.booktitle = book.title;
    const deleteIcon = document.createElement('i');
    deleteButton.appendChild(deleteIcon);
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-xmark');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookPublished.textContent = book.published;
  }
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

  const newBook = new Book(title, author, pages, publishedDate, readStatus);

  booksMain.replaceChildren();
  myLibrary.push(newBook);
  displayBook();
  Book.prototype.read();
  Book.prototype.removeBook();
  addBookForm.reset();
  modal.close();
});

const toggleDisplay = function () {
  const toggleReadButton = document.querySelectorAll('.toggle-read-btn');
  toggleReadButton.forEach((button) => {
    myLibrary.forEach((book) => {
      console.log(book.title);
      button.textContent = book.status;
    });
  });
};

const checkStatus = function () {
  myLibrary.forEach((book) => {
    if (book.status === 'read') {
      console.log(book.title);
    }
  });
};
