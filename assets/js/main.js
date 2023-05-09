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
