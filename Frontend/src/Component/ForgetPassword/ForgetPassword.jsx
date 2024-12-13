import './ForgetPassword.css'
import forget from '../../assets/forget.png'

const ForgetPassword = () => {
    return (
        <div className='forgetpasscontainer'>
            <div className="form-area">
                <form method='POST'>
                    <h1 className='text-blue-950'>Forgot Password</h1>
                    <input type="email" placeholder='Enter your email' required />
                    <button className='sendotp'>Send OTP</button>
                </form>
            </div>
            <div className="image-area">
                <img src={forget} alt=""  />
            </div>
        </div>
    )
}

export default ForgetPassword