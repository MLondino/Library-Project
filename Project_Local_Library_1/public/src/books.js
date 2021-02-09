function findAuthorById(authors, id) {
  const found = authors.find((ident) => ident.id === id)
  return found
}

function findBookById(books, id) {
  const found = books.find((ident) => ident.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = []
  let openBooks = []
  let totalBooks = []
  for (let index = 0; index < books.length; index++){
    let borrowers = books[index].borrows
    let isLoaned = borrowers.some((borrower) => borrower.returned === false)
    if(isLoaned === true) {
      borrowedBooks.push(books[index])
    }
    else {
      openBooks.push(books[index])
    }
  }
  totalBooks.push(borrowedBooks, openBooks)
  return totalBooks
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    const account = accounts.find(account => account.id === borrow.id)
    return {...borrow, ...account}
  }).slice(0, 10)
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
