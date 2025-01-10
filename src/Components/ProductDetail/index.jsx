import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {
    const context = useContext(ShoppingCartContext);

    return (
        <aside
            className={`${
                context.isProductDetailOpen ? 'flex' : 'hidden'
            } fixed right-0 flex-col bg-white border border-black rounded-lg product-detail`}
        >
            <div className="flex items-center justify-between p-6">
                <h2 className="text-xl font-medium">Detail</h2>
                <div onClick={context.closeProductDetail}>
                    <XMarkIcon className="w-6 h-6 text-black"></XMarkIcon>
                </div>
            </div>
        </aside>
    );
};

export default ProductDetail;