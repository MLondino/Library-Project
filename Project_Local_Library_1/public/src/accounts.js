function findAccountById(accounts, id) {
  const found = accounts.find((ident) => ident.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return accounts
}

function numberOfBorrows(account, books) {
  let counter = 0;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
      if (account["id"] === books[i].borrows[j].id) {
        counter += 1;
      }
    }
  }
  return counter
  }


function getBooksPossessedByAccount(account, books, authors) {
    let result = null;
    for (let i = 0; i < books.length; i++) {
      for (let j = 0; j < books[i].borrows.length; j++) {
        if (account["id"] === books[i].borrows[j].id && books[i].borrows[j].returned === false) {
         result = books[i]
        }
      }
    }
    let author = authors.find(author => author.id === result.authorId);
    result.author = author
    let finalProduct = [result]
    return finalProduct
   
    }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
