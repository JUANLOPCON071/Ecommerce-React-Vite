const Card = () => {
    return (
        <div className='w-56 bg-white rounded-lg cursor-pointer h-60'>
            <figure className='relative w-full mb-2 h-4/5'>
                <span className='absolute bottom-0 left-0 m-2 text-xs text-black rounded-lg bg-white/60 px-3 py-0.5'>Electronics</span>
                <img className='object-cover w-full h-full rounded-lg' src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='headphones' />
                <div className='absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 m-2 bg-white rounded-full'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>Headphones</span>
                <span className='text-lg font-medium'>$300</span>
            </p>
        </div>
    )
}

export default Card;