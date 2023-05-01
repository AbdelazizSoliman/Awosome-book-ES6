import setupNavigation from './modules/setupNavigation.js';
import Book from './modules/bookStorage.js';
import { DateTime } from './modules/luxon.js';
import StoreBooks from './modules/storebooks.js';

setupNavigation();

class UI {
  static displayBooks = () => {
    const books = StoreBooks.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  };

  static addBookToList = (book) => {
    const list = document.querySelector('#data');
    const div = document.createElement('div');
    div.classList.add('data-cont');
    div.innerHTML = `
      <p>"${book.title}"</p>
      <p>by</p>
      <p>${book.author}</p>
      <div><button id="remove-btn" class='delete'>Remove</button></div>
    `;
    list.appendChild(div);
  };

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField = () => {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  };
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  StoreBooks.addBook(book);
  UI.clearField();
});

document.querySelector('#data').addEventListener('click', UI.deleteBook);

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.querySelector('#timeText').textContent = currentDate;
