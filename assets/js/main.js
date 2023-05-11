import loader from './components/loader.js'
import showMenu from './components/showMenu.js'
import showCart from './components/showCart.js'
import Products from './components/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './components/cart.js'

/* UI Elements*/
/* Ocultar loader*/
loader()

/*Mostrar menu*/
showMenu()

/*Mostrar Carrito*/
showCart()

/*End UI Elements*/

/*Products*/
const {db, printProducts } = Products(await getProducts())

/* Carrito */
cart(db, printProducts)

//Dark mode

const themeButton = document.getElementById('theme')
const ls = window.localStorage

const theme = ls.getItem('theme')

//obtener el modo actual

if(theme == 'dark'){
    document.body.classList.add('dark')
}else{
    document.body.classList.remove('dark')
}

themeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark')

    if (document.body.classList.contains('dark')){
        ls.setItem('theme', 'dark')
    }else{
        ls.removeItem('theme')
    }
})