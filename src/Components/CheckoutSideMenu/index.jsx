import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);

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
        </aside>
    );
};

export default CheckoutSideMenu;