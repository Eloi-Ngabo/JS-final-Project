function openMenu() {
  document.body.classList += " menu--open"  
}

function closeMenu() {
  document.body.classList.remove("menu--open") 
}



let books;

 async function renderBooks(filter) {
 const booksWrapper = document.querySelector(".books");

  booksWrapper.classList += ' books__loading'

  if(!books) {
    books = await getBooks()
  }
    
  booksWrapper.classList.remove ('books__loading')
  
  if (filter === 'LOW_TO_HIGH') {
    books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice));
  }
  else if (filter === 'HIGH_TO_LOW') {
    books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice));
  }
  else if (filter === 'Rating') {
    books.sort((a, b) => b.rating - a.rating);
  }

  const boonksHtml = books.map((book) => {

   return `<div class="book">
  <figure class="book__img--wrapper">
    <img class="book__img" src="${book.url}" alt=""> 
  </figure>
  <div class="book__title">
  ${book.title}
  </div>
  <div class="book__ratings">
   ${ratingsHTML(book.rating)}
  </div>
  <div class="book__price">
   ${priceHTML(book.originalPrice, book.salePrice)}
  </div>
  </div>`
  })
  .join("")

  booksWrapper.innerHTML = boonksHtml;

}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`
  }
  else {
    return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span>$${salePrice.toFixed(2)}`
  }
  
}



function ratingsHTML(rating) {
    let ratingHTML = '';
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratingHTML += '<i class="fa-solid fa-star"></i>'
  }
  if (!Number.isInteger(rating)) {
    ratingHTML += '<i class="fa-solid fa-star-half-alt"></i>'
  }
  return ratingHTML;
}

function filterBooks(event) {
    renderBooks(event.target.value);
}

setTimeout(() => {
  renderBooks();
});

// // // // SEARCH Movies
function getBooks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([

        {
"Title": "The Fast and the Furious",
"Year": "2001",
"imdbID": "tt0232500",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
},
{
"Title": "Fast & Furious 6",
"Year": "2013",
"imdbID": "tt1905041",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
},
{
"Title": "Fast Five",
"Year": "2011",
"imdbID": "tt1596343",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
},
{
"Title": "Fast & Furious",
"Year": "2009",
"imdbID": "tt1013752",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"
},
{
"Title": "The Fast and the Furious: Tokyo Drift",
"Year": "2006",
"imdbID": "tt0463985",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
},
{
"Title": "2 Fast 2 Furious",
"Year": "2003",
"imdbID": "tt0322259",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg"
},
{
"Title": "Fast & Furious Presents: Hobbs & Shaw",
"Year": "2019",
"imdbID": "tt6806448",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg"
},
{
"Title": "F9: The Fast Saga",
"Year": "2021",
"imdbID": "tt5433138",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg"
},
{
"Title": "Fast X",
"Year": "2023",
"imdbID": "tt5433140",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_QL75_UX380_CR0,20,380,562_.jpg"
},
{
"Title": "Fast Times at Ridgemont High",
"Year": "1982",
"imdbID": "tt0083929",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMWM4NTc3N2YtMjk2Ny00MTRmLWE4YzItNTVhMTRlODVkNmE5XkEyXkFqcGc@._V1_SX300.jpg"
}
        
      ]);
    }, 1000);
  });
}








