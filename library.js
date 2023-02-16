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

Book.prototype.read = function updateReadStatus() {
  const notReadButton = document.querySelector('.not-read-btn');
  notReadButton.addEventListener('click', () => {
    if (notReadButton.textContent === 'Not Read') {
      notReadButton.textContent = 'Read';
      notReadButton.classList.remove('not-read-btn');
      notReadButton.classList.add('read-btn');
    } else {
      notReadButton.textContent = 'Not Read';
      notReadButton.classList.remove('read-btn');
      notReadButton.classList.add('not-read-btn');
    }
  }
)};

// Update not read or read button
// function updateReadStatus() {
//   const notReadButtonAll = document.querySelectorAll('.not-read-btn');
//   notReadButtonAll.forEach((button) => {
//     button.addEventListener('click', () => {
//       if (button.textContent === 'Not Read') {
//         button.textContent = 'Read';
//         button.classList.remove('not-read-btn');
//         button.classList.add('read-btn');
//       } else {
//         button.textContent = 'Not Read';
//         button.classList.remove('read-btn');
//         button.classList.add('not-read-btn');
//       }
//     });
//   });
// }


// Showing library array in main display
function iterateBooks() {
  const booksMain = document.querySelector('.books');

  for (book of myLibrary) {
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
    const notReadButton = document.createElement('button');
    cardButtons.appendChild(notReadButton);
    notReadButton.classList.add('not-read-btn');
    notReadButton.textContent = 'Not Read';

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

    const bookIndex = myLibrary.indexOf(book);
    bookTitle.textContent = myLibrary[bookIndex].title;
    bookAuthor.textContent = myLibrary[bookIndex].author;
    bookPages.textContent = myLibrary[bookIndex].pages;
    bookPublished.textContent = myLibrary[bookIndex].published;
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

  const book = new Book(title, author, pages, publishedDate, readStatus);

  const booksMain = document.querySelector('.books');

  myLibrary.push(book);
  addBookForm.reset();
  booksMain.replaceChildren();
  iterateBooks();
  updateReadStatus();

  // if (book.status === 'read') {
  //   const notReadButton = document.querySelector('.not-read-btn');
  //   notReadButton.textContent = 'Read';
  //   notReadButton.classList.remove('not-read-btn');
  //   notReadButton.classList.add('read-btn');
  // }

  modal.close();
});
