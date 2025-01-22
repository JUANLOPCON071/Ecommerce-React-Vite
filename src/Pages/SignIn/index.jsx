import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"

function SignIn() {

    return (
      <Layout>
        <h1 className='mb-6 text-xl font-medium text-center w-80'>Welcome</h1> 
        <div className='flex flex-col w-80'>
          <p>
            <span className='text-sm font-light'>Email:</span>
            <span>juan@platzi.com</span>
          </p>
          <p>
            <span className='text-sm font-light'>Password:</span>
            <span>********</span>
          </p>
          <Link
            to='/'>
              <button 
                className='w-full py-3 mt-4 mb-2 text-white bg-black rounded-lg disabled:bg-black/40'>
                Log in
              </button>
          </Link>
          <div className='text-center'>
            <a className='text-xs font-light underline underline-offset-4' href='/'>Forgot my password</a>
          </div>
          <button className='py-3 mt-6 border border-black rounded-lg disabled:text-black/40 disabled:border-black/40'>
            Sign up
          </button>
        </div>
      </Layout>
    )
  }
  
  export default SignIn