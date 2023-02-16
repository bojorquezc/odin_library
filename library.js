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

// eslint-disable-next-line prefer-const
let myLibrary = [
  // {
  //   title: 'Dracula',
  //   author: 'Bram Stoker',
  //   pages: '418',
  //   published: '1897',
  //   status: 'Not Read',
  // },
  // {
  //   title: 'Don Quixote',
  //   author: 'Miguel de Cervantes',
  //   pages: '1072',
  //   published: '1605',
  //   status: 'Not Read',
  // },
];

function Book(title, author, pages, published, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.status = status;
}

Book.prototype.read = function () {
  const toggleReadButton = document.querySelectorAll('.toggle-read-btn');
  toggleReadButton.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.textContent === 'Not Read') {
        item.textContent = 'Read';
        item.classList.remove('not-read-btn');
        item.classList.add('read-btn');
      } else {
        item.textContent = 'Not Read';
        item.classList.remove('read-btn');
        item.classList.add('not-read-btn');
      }
    });
  });
};

// Showing library array in main display
function displayBook() {
  const booksMain = document.querySelector('.books');

  for (item of myLibrary) {
    const unreadCard = document.createElement('div');
    unreadCard.classList.add('unread-card');
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
    const deleteIcon = document.createElement('i');
    deleteButton.appendChild(deleteIcon);
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-xmark');

    bookTitle.textContent = item.title;
    bookAuthor.textContent = item.author;
    bookPages.textContent = item.pages;
    bookPublished.textContent = item.published;
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
  myLibrary.push(newBook);
  displayBook();
  addBookForm.reset();
  modal.close();

  // if (book.status === 'read') {
  //   const toggleReadButton = document.querySelector('.not-read-btn');
  //   toggleReadButton.textContent = 'Read';
  //   toggleReadButton.classList.remove('not-read-btn');
  //   toggleReadButton.classList.add('read-btn');
  // }
});
