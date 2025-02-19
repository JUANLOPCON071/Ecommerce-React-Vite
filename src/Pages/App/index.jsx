import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/NavBar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'
import { ShoppingCartContext, ShoppingCartProvider } from '../../Context'
import { useContext } from 'react'

const AppRoutes = () => {
  const context = useContext(ShoppingCartContext)

  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/shoes', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut? <Home/> : <Navigate replace to={'/sign-in'}/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/my-orders/last', element: <MyOrder/> },
    { path: '/my-orders/:id', element: <MyOrder/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/*', element: <NotFound/> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar/>
        <CheckoutSideMenu></CheckoutSideMenu>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
