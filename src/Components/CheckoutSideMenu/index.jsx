import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '16.01.25',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
    }

    return (
        <aside
            className={`${
                context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
            } fixed right-0 flex-col bg-white border border-black rounded-lg Checkout-side-menu`}
        >
            <div className='flex items-center justify-between p-6'>
                <h2 className="text-xl font-medium">My Order</h2>
                <div>
                    <XMarkIcon 
                      className='w-6 h-6 text-black cursor-pointer'
                      onClick={() => context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='flex-1 px-6 overflow-y-scroll'>
            {
                context.cartProducts.map(product => (
                    <OrderCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageUrl={product.images}
                      price={product.price}
                      handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex items-center justify-between mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='text-2xl font-medium'>${totalPrice(context.cartProducts)}</span>
                </p>
                <button className='w-full py-3 text-white bg-black rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
            </div>
        </aside>
    );
};

export default CheckoutSideMenu;