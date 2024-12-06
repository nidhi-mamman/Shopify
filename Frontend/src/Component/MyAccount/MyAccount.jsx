import { useRef, useState } from 'react'
import axios from "axios"
import './MyAccount.css'
import { useContext } from 'react'
import { shopContext } from './../../Context/ContextProvider';

const MyAccount = () => {
    const [signupMode, setsignupMode] = useState(false)
    const [signupMode2, setsignupMode2] = useState(false)
    const {BASE_URL}=useContext(shopContext)
    const containerRef = useRef(null)
    const signupRef = useRef()


    const handleSignUpClick = () => {
        setsignupMode(true);
    };

    const handleSignInClick = () => {
        setsignupMode(false);
    };

    const handleSignUpClick2 = () => {
        setsignupMode2(true);
    };

    const handleSignInClick2 = () => {
        setsignupMode2(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        let form = new FormData(signupRef.current)
        let formData = {}
        for (let [key, value] of form.entries()) {
            formData[key] = value
        }
        try {
            const response=await axios.post(`${BASE_URL}/signup`,formData)
            if(response.status===201){
                console.log("hiii")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='container'>
                <div ref={containerRef} className={`container-fluid ${signupMode ? "sign-up-mode" : ""} ${signupMode2 ? "sign-up-mode-2" : ""}`}>
                    <div className="signin">
                        <form method="POST">
                            <h1>Sign in</h1>
                            <p>or use your account</p>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <p>Forgot your  password?</p>
                            <p className='account-txt'>Do not have account ? <span className='text-blue-600 cursor-pointer' onClick={handleSignUpClick2}>Sign up</span></p>
                            <button>SIGN IN</button>
                        </form>
                    </div>
                    <div className="signup">
                        <form method="POST" ref={signupRef} onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <p>or use your email for registration</p>
                            <input type="text" name="name" placeholder="Name" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="password" placeholder="Password" required />
                            <p className='account-txt'>Do you already have an account ? <span className='text-blue-600 cursor-pointer' onClick={handleSignInClick2}>Sign in</span></p>
                            <button  type='submit'>SIGN UP</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay overlay-left">
                            <div className="content">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button id="signin" onClick={handleSignInClick}>SIGN IN</button>
                            </div>
                        </div>
                        <div className="overlay overlay-right">
                            <div className="content">
                                <h1>Hello Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button id="signup" onClick={handleSignUpClick}>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount