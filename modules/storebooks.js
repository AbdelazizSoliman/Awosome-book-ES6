class StoreBooks {
  static getBooks() {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  }

  static setBooks(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  static addBook(book) {
    const books = StoreBooks.getBooks();
    books.push(book);
    StoreBooks.setBooks(books);
  }

  static removeBook(author) {
    const books = StoreBooks.getBooks().filter(
      (book) => book.author !== author,
    );
    StoreBooks.setBooks(books);
  }
}

export default StoreBooks;
