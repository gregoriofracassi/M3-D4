fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then(res => {
    displayBooks(res)
})

const displayBooks = (books) => {
    books.forEach ( book => {
        const row = document.querySelector('.main-list')
        const bookDiv = document.createElement('div')
        bookDiv.classList.add('col-2')
        bookDiv.innerHTML = `
        <div class="card">
          <img class="card-img-top" src="${book.img}" height="250" alt="Card image cap">
          <div class="card-body">
            <p class="card-title">${book.title}</p>
            <a href="#" class="btn btn-sm btn-secondary">Add to cart</a>
          </div>
        </div>
        `
        row.appendChild(bookDiv)
    })
}
