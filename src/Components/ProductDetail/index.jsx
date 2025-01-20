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
            <div className='flex items-center justify-between p-6'>
                <h2 className="text-xl font-medium">Detail</h2>
                <div>
                    <XMarkIcon 
                      className='w-6 h-6 text-black cursor-pointer'
                      onClick={context.closeProductDetail}></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img 
                  className='w-full h-full rounded-lg' 
                  src={context.productToShow.images[0]} 
                  alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='mb-2 text-2xl font-medium'>${context.productToShow.price}</span>
                <span className='font-medium text-md'>{context.productToShow.title}</span>
                <span className='text-sm font-medium'>{context.productToShow.description}</span>
            </p>
        </aside>
    );
};

export default ProductDetail;