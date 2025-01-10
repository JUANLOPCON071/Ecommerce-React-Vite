import { useContext } from "react";
import { ShoppingCartContext } from "../Context";

const Card = (data) => {
    const context = useContext(ShoppingCartContext)
    return (
        <div className='w-56 bg-white rounded-lg cursor-pointer h-60'>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 m-2 text-xs text-black rounded-lg bg-white/60 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='object-cover w-full h-full rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                <div 
                  className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 bg-white rounded-full'
                  onClick={() => context.setCount(context.count + 1)}>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;