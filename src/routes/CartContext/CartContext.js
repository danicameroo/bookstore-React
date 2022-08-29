import { useState, useContext } from "react";
import React from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log('carrito: ', cart)

    const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id)
        if (product) {
            product.quantity += quantity
            newCart = [...cart]
        } else {
            product = {...item, quantity: quantity}
            newCart = [...cart, product]
        }
        setCart(newCart);
    } 


    const PrecioTotal = () => {
        return parseInt( cart.reduce((prev, act) => prev + act.quantity * act.precio, 0))
    }

    const ProductoTotal = () => cart.reduce((acc, pro) => acc + pro.quantity, 0)

    const Limpiar = () => setCart([])

    const Buscar = (id) => cart.find (libros => libros.id === id) ? true : false
    
    const Eliminar = (id) => setCart(cart.filter (libros => libros.id !== id)) 

    return (
    <CartContext.Provider value={{Limpiar, addProduct, Eliminar, Buscar, PrecioTotal, ProductoTotal, cart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider