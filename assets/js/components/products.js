function Products (Products) {
    const db = [...Products]

    function printProducts () {
        const productsDON = document.querySelector('.products__container')
        let htmlProducts = ''

        for(let products of db) {
            htmlProducts += `<article class="product">
            <div class="product__image">
                <img src="${products.image}" alt="${products.name}">
            </div>
            <div class="product__content">
                <button type="button" class="product__btn add--to--cart" data-id="${products.id}">
                    <i class='bx bx-cart-add'></i>
                </button>
                <span class="product__price">${products.price}</span>
                <span class="product__stock">Disponibles: ${products.quantity}</span>
                <h3 class="product__title">${products.name}</h3>
            </div>
        </article>`
        }

        productsDON.innerHTML = htmlProducts
    }

    printProducts()

    return {
        db,
        printProducts
    }
}

export default Products