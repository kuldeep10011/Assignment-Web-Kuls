// Input list of books with authors and publication years
const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2015 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2012 },
    { title: "Book 5", author: "author 5", year: 2008 },
  ];
  
  // Function to filter and capitalize book authors
  function filterAndCapitalizeBooks(books) {
    const currentYear = new Date().getFullYear();
  
    return books.filter((book) => book.year >= 2010).map((book) => {
      return {
        title: book.title,
        author: book.author.toUpperCase(),
      };
    });
  }
  
  // Get the filtered and capitalized books
  const filteredAndCapitalizedBooks = filterAndCapitalizeBooks(books);
  
  // Output the result
  console.log(filteredAndCapitalizedBooks);