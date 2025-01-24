import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import ShoppingCart from '../ShoppingCart'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'

    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    const isUserSignOut = context.signOut || parsedSignOut

    const account = localStorage.getItem('account')
    const parsedAccount = JSON.parse(account)

    const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

    const handleSignOut = () => {
      const stringifiedSignOut = JSON.stringify(true)
      localStorage.setItem('sign-out', stringifiedSignOut)
      context.setSignOut(true)
    }

    const renderView = () => {
      if (isUserSignOut) {
        return (
        <li>
          <NavLink 
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            onClick={() => handleSignOut()}>
              Sign In
          </NavLink>
        </li>
        )
      } else {
        if (hasUserAnAccount && !isUserSignOut) {
          return (
            <>
              <li className='text-black/60'>
                {parsedAccount?.email}
              </li>
              <li>
                <NavLink 
                  to='/my-orders'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                    My Orders
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/my-account'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                     My Account
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to='/sign-in'
                  className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }
                  onClick={() => handleSignOut()}>
                        Sign out
                </NavLink>
              </li>
            </>
          )
        } else {
          return (
            <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => isActive ? activeStyle : undefined }
              onClick={() => handleSignOut()}>
              Sign up
            </NavLink>
          </li>
          )
        }
      }
    }
    return (
        <nav className='fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg font-semibold'>
                    <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/'
                      onClick={() => context.setSearchByCategory()}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/clothes'
                      onClick={() => context.setSearchByCategory('Tools')}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/electronics'
                      onClick={() => context.setSearchByCategory('Electronics')}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/furnitures'
                      onClick={() => context.setSearchByCategory('Furniture')}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/shoes'
                      onClick={() => context.setSearchByCategory('Shoes')}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/others'
                      onClick={() => context.setSearchByCategory('Miscellaneous')}
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                {renderView()}
                <li className='flex items-center'>
                  <ShoppingCart/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;