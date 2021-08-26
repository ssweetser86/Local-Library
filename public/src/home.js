function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter(book => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    const found = acc.find((genre => genre.name === book.genre));
    !!found ? found.count++ : acc.push({name: book.genre, count: 1});
    return acc;
  }, []);
  result.sort((a, b) => (a.count < b.count) ? 1 : -1);
  return result.slice(0,5);
}

function getMostPopularBooks(books) {
  const result = books.reduce((acc, book) => {
    acc.push({name: book.title, count: book.borrows.length})
    return acc;
  }, []);
  result.sort((a, b) => (a.count < b.count) ? 1 : -1);
  return result.slice(0,5);
}

function fullName(author) {
  return `${author.name.first} ${author.name.last}`;
}

function getMostPopularAuthors(books, authors) {
  const result = books.reduce((acc, book) => {
    const found = authors.find((author => author.id === book.authorId));
    const isInArr = acc.find((currentAuthor => currentAuthor.name === fullName(found)))
    !!isInArr ? isInArr.count += book.borrows.length : acc.push({name: fullName(found), count: book.borrows.length});
    return acc;
  }, []);
  result.sort((a, b) => (a.count < b.count) ? 1 : -1);
  return result.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
