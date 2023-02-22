/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
// Modal functionality
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.add-book-btn');
const closeModal = document.querySelector('.close-modal');
const formTitle = document.querySelector('.form-title');
const submitButton = document.querySelector('.submit-btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const publishedDate = document.querySelector('#published-date');
const readStatus = document.querySelector('#read-status');
const editButton = document.querySelectorAll('.edit-btn');
const booksMain = document.querySelector('.books');

openModal.addEventListener('click', () => {
  formTitle.textContent = 'Add a book to Library';
  submitButton.textContent = 'Add Book';
  modal.showModal();
});

closeModal.addEventListener('click', () => {
  modal.close();
});

// eslint-disable-next-line prefer-const
let myLibrary = [];

// eslint-disable-next-line no-shadow
function Book(title, author, pages, published, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.published = published;
  this.status = status;
}

Book.prototype.updateStatus = function () {
  const toggleReadButton = document.querySelectorAll('.toggle-read-btn');
  toggleReadButton.forEach((button) => {
    const dataSetTitle = button.dataset.booktitle;
    myLibrary.forEach((book) => {
      if (dataSetTitle === book.title) {
        if (button.textContent === 'Read') {
          book.status = 'read';
        } else if (button.textContent === 'Not Read') {
          book.status = 'not-read';
        }
      }
    });
  });
};

// Showing library array in main display
function displayBook() {
  myLibrary.forEach((book) => {
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
    // toggleReadButton.classList.add('not-read-btn');
    toggleReadButton.dataset.booktitle = book.title;
    toggleReadButton.textContent = 'Not Read';

    const editButton = document.createElement('button');
    cardButtons.appendChild(editButton);
    editButton.classList.add('edit-btn');
    editButton.dataset.booktitle = book.title;
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
  });
}

Book.prototype.read = function () {
  const toggleReadButton = document.querySelectorAll('.toggle-read-btn');
  toggleReadButton.forEach((button) => {
    const dataSetTitle = button.dataset.booktitle;
    myLibrary.forEach((book) => {
      if (dataSetTitle === book.title) {
        if (book.status === 'read') {
          button.textContent = 'Read';
          button.classList.add('read-btn');
          button.classList.remove('.not-read-btn');
        } else if (book.status === 'not-read') {
          button.textContent = 'Not Read';
          button.classList.add('not-read-btn');
          button.classList.remove('read-btn');
        }
      }
    });
  });
};

Book.prototype.removeBook = function () {
  const deleteButton = document.querySelectorAll('.delete-btn');
  deleteButton.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSetTitle = button.dataset.booktitle;
      myLibrary.forEach((book, index) => {
        if (dataSetTitle === book.title) {
          myLibrary.splice(index, 1);
        }
        booksMain.replaceChildren();
        displayBook();
        book.read();
        book.removeBook();
        book.readToggle();
        book.bookCounter();
      });
    });
  });
};

Book.prototype.readToggle = function () {
  const toggleReadButton = document.querySelectorAll('.toggle-read-btn');
  toggleReadButton.forEach((button) => {
    button.addEventListener('click', () => {
      if (button.textContent === 'Not Read') {
        button.textContent = 'Read';
        button.classList.remove('not-read-btn');
        button.classList.add('read-btn');
        Book.prototype.updateStatus();
        Book.prototype.bookCounter();
      } else {
        button.textContent = 'Not Read';
        button.classList.remove('read-btn');
        button.classList.add('not-read-btn');
        Book.prototype.updateStatus();
        Book.prototype.bookCounter();
      }
    });
  });
};

Book.prototype.bookCounter = function () {
  let toReadBooksCounter = 0;
  let readBooksCounter = 0;
  const toReadBooks = document.querySelector('.books-to-read');
  const readBooks = document.querySelector('.books-read');
  myLibrary.forEach((book) => {
    if (book.status === 'read') {
      readBooksCounter += 1;
    } else if (book.status === 'not-read') {
      toReadBooksCounter += 1;
    }
    toReadBooks.textContent = toReadBooksCounter.toString();
    readBooks.textContent = readBooksCounter.toString();
  });
};

// Adding or editing book object in array
const addBookForm = document.querySelector('.add-book-form');

addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (submitButton.textContent === 'Edit Book') {
    editButton.forEach((button) => {
      const dataSetTitle = button.dataset.booktitle;
      myLibrary.forEach((book) => {
        if (dataSetTitle === book.title) {
          book.title = title.value;
          book.author = author.value;
          book.pages = pages.value;
          book.published = publishedDate.value;
          book.status = readStatus.value;
          booksMain.replaceChildren();
          displayBook();
          Book.prototype.removeBook();
          Book.prototype.read();
          Book.prototype.readToggle();
          Book.prototype.bookCounter();
          addBookForm.reset();
          modal.close();
        }
      });
    });
  } else {
    // eslint-disable-next-line max-len
    const newBook = new Book(title.value, author.value, pages.value, publishedDate.value, readStatus.value);

    booksMain.replaceChildren();
    myLibrary.push(newBook);
    displayBook();
    Book.prototype.removeBook();
    Book.prototype.read();
    Book.prototype.readToggle();
    Book.prototype.bookCounter();
    addBookForm.reset();
    modal.close();
  }
});

Book.prototype.editBook = function () {
  editButton.forEach((button) => {
    button.addEventListener('click', () => {
      const dataSetTitle = button.dataset.booktitle;
      myLibrary.forEach((book) => {
        if (dataSetTitle === book.title) {
          title.value = book.title;
          author.value = book.author;
          pages.value = book.pages;
          publishedDate.value = book.published;
          readStatus.value = book.status;
          formTitle.textContent = 'Edit Book Entry';
          submitButton.textContent = 'Edit Book';
          modal.showModal();
        }
      });
    });
  });
};
