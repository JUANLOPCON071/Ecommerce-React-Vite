import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props

    return (
        <div className='flex items-center justify-between p-4 mb-3 border border-black rounded-lg w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'> 
                    <span className='font-light'>01.02.23</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <p className='flex items-center gap-2'>
                    <span className='text-2xl font-medium'>${totalPrice}</span>
                    <ChevronRightIcon className='w-6 h-6 text-black cursor-pointer' />
                </p>
            </div>
        </div>
    )
}

export default OrdersCard