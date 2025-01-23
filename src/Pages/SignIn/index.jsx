import { useContext, useRef, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import Layout from "../../Components/Layout"

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () => {
    localStorage.setItem('sign-out', JSON.stringify(false))
    context.setSignOut(false)
    return <Navigate replace to={'/'}/>
  }

  const createAnAccount = () => {
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }
    localStorage.setItem('account', JSON.stringify(data));
    context.setAccount(data);
    handleSignIn()
  }

  const renderLogIn = () => {
    return (
      <div className='flex flex-col w-80'>
          <p>
            <span className='text-sm font-light'>Email:</span>
            <span>{parsedAccount?.email}</span>
          </p>
          <p>
            <span className='text-sm font-light'>Password:</span>
            <span>{parsedAccount?.password}</span>
          </p>
          <Link
            to='/'>
              <button 
                className='w-full py-3 mt-4 mb-2 text-white bg-black rounded-lg disabled:bg-black/40'
                disabled={!hasUserAnAccount}
                onClick={() => handleSignIn()}>
                Log in
              </button>
          </Link>
          <div className='text-center'>
            <a className='text-xs font-light underline underline-offset-4' href='/'>Forgot my password</a>
          </div>
          <button 
            className='py-3 mt-6 border border-black rounded-lg disabled:text-black/40 disabled:border-black/40'
            onClick={() => setView('create-user-info')}
            disabled={hasUserAnAccount}>
            Sign up
          </button>
        </div>
    )
  }

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className='flex flex-col gap-4 w-80'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='name' className='text-sm font-light'>Your name:</label>
          <input 
            type='text'
            id='name'
            name='name'
            defaultValue={parsedAccount?.name}
            placeholder='Jhon'
            className='px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none' 
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='text-sm font-light'>Your email:</label>
          <input 
            type='text'
            id='email'
            name='email'
            defaultValue={parsedAccount?.email}
            placeholder='hola@gmail.com'
            className='px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none' 
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='text-sm font-light'>Your password:</label>
          <input 
            type='text'
            id='password'
            name='password'
            defaultValue={parsedAccount?.password}
            placeholder='********'
            className='px-4 py-2 border border-black rounded-lg placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none' 
          />
        </div>
        <Link to='/'>
          <button
            className='w-full py-3 text-white bg-black rounded-lg'
            onClick={() => createAnAccount()}>
              Create
          </button>
        </Link>
      </form>
    )
  }

  const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogIn()

    return (
      <Layout>
        <h1 className='mb-6 text-xl font-medium text-center w-80'>Welcome</h1> 
        {renderView()}
      </Layout>
    )
  }
  
  export default SignIn