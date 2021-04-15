fetch('https://striveschool-api.herokuapp.com/books')
.then(response => response.json())
.then(res => {
    displayBooks(res)
    assignCart()
})

const cart = []


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
            <a href="#" class="btn cart-btn btn-sm btn-secondary">Add to cart</a>
          </div>
        </div>
        `
        row.appendChild(bookDiv)
    })
}

const addToCart = (e) => {
    let cartBtn = e.currentTarget
    let cardDiv = cartBtn.closest('.card')
    if (cartBtn.dataset.status !== 'remove') {
        cardDiv.style.border = 'solid 2px aquamarine'
        cartBtn.innerHTML = 'Remove'
        cartBtn.setAttribute('data-status', 'remove')
    } else if (cartBtn.dataset.status === 'remove'){
        cardDiv.style.border = '0px'
        cartBtn.innerHTML = 'Add to cart'
        cartBtn.dataset.status = 'add'
    }
    console.log(cardDiv.querySelector('.card-title').innerHTML)
}

const assignCart = () => {
    const cartBtn = document.querySelectorAll('.cart-btn')
    cartBtn.forEach(btn => btn.onclick = addToCart)
}


