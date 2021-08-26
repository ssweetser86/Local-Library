function findAccountById(accounts, id) {
  return accounts.find((acct) => acct.id === id);
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) =>
    nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase() ? -1 : 1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let ctr = 0;
  books.forEach(book => {
    book.borrows.forEach(title => {
      if (title.id === account.id) ctr++;
    });
  });
  return ctr;
}

function getBooksPossessedByAccount(account, books, authors) {
  const possessed = [];
  books.forEach(book => {
    book.borrows.forEach(title => {
      if(title.id === account.id && title.returned === false) {
        book['author'] = authors.find(a => a.id === book.authorId);
        possessed.push(book);
      }
    })  
  })
  return possessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
