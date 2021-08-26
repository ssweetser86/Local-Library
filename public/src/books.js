function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let partitioned = [[],[]];
  partitioned[0] = books.filter(book => !book.borrows[0].returned);
  partitioned[1] = books.filter(book => book.borrows[0].returned);
  return partitioned;
}

function getBorrowersForBook(book, accounts) {
  let list = [];
  book.borrows.forEach(b => {
    accounts.forEach(a => {
      if(a.id === b.id && list.length < 10) {
        a['returned'] = b.returned;
        list.push(a);
      }
    });
  });
  return list;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
