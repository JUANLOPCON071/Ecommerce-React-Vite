import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const ShoppingCart = () => {
    const context = useContext(ShoppingCartContext)

    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const openCheckoutSideMenu = () => {
        if (isUserSignOut) {
            return
        } else {
            context.openCheckoutSideMenu()
            context.closeProductDetail() 
        }
    }

    return (
        <div 
          className='relative flex gap-0.5 items-center'
          onClick={() => openCheckoutSideMenu()} >
            <ShoppingBagIcon className='w-6 h-6 cursor-pointer fill-none stroke-black'></ShoppingBagIcon>
            <div className='absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4
            text-xs text-white'>
                {context.cartProducts.length}
            </div>
        </div>
    )
}

export default ShoppingCart