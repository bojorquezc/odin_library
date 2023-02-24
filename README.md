# The Odin Project - Library Project
Start Date Feb 06 2023
Completion Date Feb 23 2023


## Project Description
Basic library project using HTML/CSS/JS to keep track of read and unread books.
For this project the user needs to be able to:

**Add a book / Delete a book**
The book can have any of the following statuses:
- Read
- Unread

The book can be added with the following information
- Title
- Author
- Pages
- Published date
- Read Status

The book can have any of the information edited if needed.


**Programming Requirements**
From a technical standpoint, this project needs to use the following:

- Library - All the books need to be stored in an array
- Book - each book needs to be created using an object constructor
- Form - A form needs to be added to add or edit the book’s information, and a function needs to be created to push or update the book’s information
- Displaying books - A function needs to be written to display the books in the webpage, either in a table view or a grid view.

*Sample of core functionality structure:*

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

### Steps to Complete Project

**Project preparation**
- Create repository https://github.com/bojorquezc/odin_library
- Create core files HTML, CSS, JS, README
- Add ESLint to project (Using AirBnB style)

**Project design and visuals**
- Create design in Figma
- Code HTML/CSS

**Project functionality**
- Create ‘myLibrary” empty array to store book objects
- Create function ‘Book’ constructor to create book objects
- Create function to push book objects to ‘myLibrary’ using the form
- Create function to loop through ‘myLibrary’ and display the books in a grid view
- Add ‘New Book’ button that triggers a form so the user can input (Title, Author, Pages, Published Date, Status)
- Remove default behavior from form, use event.preventDefault
- Associate DOM elements with book objects in ‘myLibrary’ (data-attribute linking book titles)
- Add “Delete” option in each book row or card, this button will remove the book object from the array
- Add option to toggle between “Read” and “Not Read” status on click for each card or row


Original project description
https://www.theodinproject.com/lessons/node-path-javascript-library

Figma design file
[TOP Library figma design](https://www.figma.com/file/YCajnOIMohhIcLz2IPs2gc/TOP---Library-Project?node-id=0%3A1&t=Vhmp6DFYuYjQtDUn-1 "TOP Library figma design")

### Learned / Notes
I feel that in the end the end my code needs to be cleaned up and organized better, I currently think in chunks of code and try to piece together the functionality, I feel that this is leading me to re using a lot of functions or methods that can probably be refactored so they are not being repeated.

One of the main purposes of this lesson was to try to use prototype, I think I understand the concept, but not how to effectively use it yet.
