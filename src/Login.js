import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'
function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = e => {
        // stops refresh
        e.preventDefault()
        // login logic 
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in , redirect to homepage 
            history.push('/')

        }).catch(e => alert(e.message))

    }
    const register = e => {
        // stops refresh
        e.preventDefault()
        // register logic
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created user and logged in 
            history.push('/')
        }).catch(e => alert(e.message))

    }
    return (
        <div className='login'>
        <Link to='/'>
           <img className='login__logo' 
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amaazon_log.svg.png" 
           alt=""
           />

        </Link>
        <div className="login__container">
            <h1>Sign In </h1>
            <form>
            <h5>E-mail</h5>
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
            </form>
            <p>By sigining-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
            <button onClick={register} className='login__registerButon'>Create your Amazon Account</button>
        </div>
        </div>
    )
}

export default Login
