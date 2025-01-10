import { XMarkIcon } from '@heroicons/react/24/solid'
import './styles.css'

const ProductDetail = () => {
    return (
        <aside className='fixed right-0 flex flex-col bg-white border border-black rounded-lg product-detail'>
            <div className='flex items-center justify-between p-6'>
                <h2 className='text-xl font-medium'>Detail</h2>
                <div>
                    <XMarkIcon className='w-6 h-6 text-black'></XMarkIcon>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail;