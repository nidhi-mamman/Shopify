import './ForgetPassword.css'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    return (
        <div className='forgetpasscontainer'>
            <div className="form-area">
                <form method='POST' className='forget-form'>
                    <h1 className='text-blue-950'>Forgot Password</h1>
                    <input type="email" placeholder='Enter your email' className='form-input' required />
                    <button className='sendotp'><Link to='/resetpass'>Send OTP</Link></button>
                   <Link to='/myAcc' className='text-blue-950'>Sign In</Link>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword