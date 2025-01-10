import { useEffect, useState } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
      
    },[])
    return (
      <Layout>
        Home 
        <div className='grid w-full max-w-screen-lg grid-cols-4 gap-4'>
        {
          items?.map(item => (
            <Card key={item.id} data={item}/>
          ))
        }
        </div>
        <ProductDetail/>
      </Layout>
    )
  }
  
  export default Home