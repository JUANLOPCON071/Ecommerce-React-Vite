import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard";
import { totalPrice } from "../../utils";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = context.order?.length - 1

    return (
      <Layout>
        <div className='relative flex items-center justify-center mb-5 w-80'>
          <Link to='/my-orders' className='absolute left-0'>
            <ChevronLeftIcon className='w-6 h-6 text-black cursor-pointer' />
          </Link>
          <h1>My Order</h1>
        </div>
         
        <div className='flex flex-col w-80'>
            {
                context.order?.[index]?.products.map(product => (
                    <OrderCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      imageUrl={product.images}
                      price={product.price}
                    />
                ))
            }
        </div>
        <div className='px-6 mb-6 w-60'>
          <p className='flex items-center justify-between mb-2'>
            <span className='font-light'>Total:</span>
            <span className='text-2xl font-medium'>${totalPrice(context.order.slice(-1)[0].products)}</span>
          </p>
        </div>
      </Layout>
    )
  }
  
  export default MyOrder