import { Link } from 'react-router-dom'
import classes from './styles.module.scss'
import { useAuth } from "@context/authContext"
import useFormData from '@hooks/useFormData'
import MyInput from '@components/UI/MyInput/MyInput'
import { useNavigate } from "react-router-dom";

function Login() {

    const loginForm = useFormData()
    const auth = useAuth()
    const navigate = useNavigate();

    const loginFormHandler = (ev)=> {
          
      ev.preventDefault()

      auth.login('/auth/login', loginForm.getData())
          .then(() => navigate('/', {replace:true}))
          .catch((error)=>{
            console.log(error)
              if(error.response.status == 422) loginForm.setError(error.response.data.errors)
          })
    }
    return (
      <div className={classes.login}>
        <div className={classes.card}>
          <div className={classes.left}>
            <h1>Hello word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
            </p>
            <span>Don't you have an account?</span>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </div>
          <div className={classes.right} >
            <h1>Login</h1>
            <form className={classes.loginForm} onSubmit={loginFormHandler}>
              <MyInput name='email' type="text" placeholder='Email' bindData={loginForm}/>
              <MyInput name='password' type="password" placeholder='Password' bindData={loginForm}/>
              <button >Login</button>
              <div className={classes.register_link_mobile}>
                Not registered yet? 
                <Link  to='/register'>
                  Registration
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
  