import { useContext } from "react";
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)

    const isUserSignOut = context.signOut || parsedSignOut

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductToCart = (event,productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()        
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart) {
            return (
                <div 
                  className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 bg-black rounded-full'
                >
                    <CheckIcon className='w-6 h-6 text-white'></CheckIcon>
                </div>
            )
        } else {
            return (
                <div 
                className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 bg-white rounded-full'
                onClick={(event) => addProductToCart(event,data.data)}>
                <PlusIcon className='w-6 h-6 text-black'></PlusIcon>
            </div>
            )
        }
    }
    return (
        <div 
          className='w-56 bg-white rounded-lg cursor-pointer h-60'
          onClick={() => showProduct(data.data)}>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 m-2 text-xs text-black rounded-lg bg-white/60 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='object-cover w-full h-full rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex items-center justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;