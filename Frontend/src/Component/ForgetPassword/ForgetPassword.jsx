import { toast } from 'react-toastify';
import './ForgetPassword.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react';

const ForgetPassword = () => {
    const formRef = useRef(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        let form = new FormData(formRef.current)
        let formData = {}
        for (let [key, value] of form.entries()) {
            formData[key] = value
        }
        const { email } = formData
        const emailPattern = /^[a-zA-Z0-9._]+@(gmail\.com|yahoo\.com)$/;
        if (email.length === 0 || !emailPattern.test(email)) {
            return toast("Please enter the email in required format i.e.xyz123@gmail.com")
        }
    }

    return (
        <div className='forgetpasscontainer'>
            <div className="form-area">
                <form method='POST' ref={formRef} onSubmit={handleSubmit} className='forget-form'>
                    <h1 className='text-blue-950'>Forgot Password</h1>
                    <input type="email" name="email"placeholder='Enter your email' className='form-input'  />
                    <button className='sendotp'><Link to='/resetpass'>Send OTP</Link></button>
                    <Link to='/myAcc' className='text-blue-950'>Sign In</Link>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword