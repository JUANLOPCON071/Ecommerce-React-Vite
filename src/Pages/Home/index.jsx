import { useContext, useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context";

function Home() {
    const context = useContext(ShoppingCartContext);

    return (
      <Layout>
        <div className='relative flex items-center justify-center mb-4 w-80'>
          <h1 className='text-xl font-medium'>Exclusive Products</h1>
        </div>
        <input 
          type="text" 
          placeholder='Search a product'
          className='p-4 mb-3 border border-black rounded-lg w-80' 
          onChange={(event) => context.setSearchByTitle(event.target.value)}/>
        <div className='grid w-full max-w-screen-lg grid-cols-4 gap-4'>
        {
          context.items?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  
  export default Home