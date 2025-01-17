import { createContext, useEffect, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)  

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)  
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)  
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    const [cartProducts, setCartProducts] = useState([])

    const [order, setOrder] = useState([])

    const [items, setItems] = useState(null)

    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log('searchByTitle:', searchByTitle);
    

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
      .then(console.log(items))
    },[])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}