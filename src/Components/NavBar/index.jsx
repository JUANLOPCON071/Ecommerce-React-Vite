import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='text-lg font-semibold'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/'
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/clothes'
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/electronics'
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/furnitures'
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/toys'
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                      to='/others'
                      className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    juan@gmail.com
                </li>
                <li>
                    <NavLink 
                      to='/my-order'
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
                      }>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='w-6 h-6 text-black'></ShoppingBagIcon>
                    <div>{context.count}</div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;