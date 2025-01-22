import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../../Context"

function SignIn() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')

  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

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
                disabled={!hasUserAnAccount}>
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