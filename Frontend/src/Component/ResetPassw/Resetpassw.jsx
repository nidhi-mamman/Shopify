import './ResetPassw.css'
import Key from '../../assets/reset.png'
import { toast } from 'react-toastify';
import { useRef, useState } from 'react';
import eyebrow from '../../assets/eyebrow.png'
import eye from '../../assets/eye.png'

const ResetPassw = () => {
  const formRef = useRef(null)
  const [isPassVisible,setisPassVisible]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()

    e.preventDefault()
    let form = new FormData(formRef.current)
    let formData = {}
    for (let [key, value] of form.entries()) {
      formData[key] = value
    }
    const { otp, password } = formData
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,12}$/;
    if (otp.length === 0) {
      return toast('Please enter the otp.')
    }
    if (password.length === 0 || !passwordPattern.test(password)) {
      return toast("Password must be atleast 8-12 chars with num-letter mix with a special symbol.")
    }
  }
  return (
    <div className='otp-container'>
      <div className="reset-area">
        <form method='POST' ref={formRef} onSubmit={handleSubmit} className="reset-form">
          <img src={Key} className='key' />
          <h1>Reset Your Password</h1>
          <input type="text" name='otp' className="otp-input" placeholder='Enter OTP' maxLength={4} />
          <div className="secure-reset">
            <input type={`${isPassVisible ? 'text' : 'password'}`} name='password' placeholder="Password" className='passw-reset' maxLength={12} required />
            {
              isPassVisible ?
                <img src={eye} className='eye cursor-pointer' alt="Eye Open" width={25} height={20} onClick={() => setisPassVisible(!isPassVisible)} />
                :
                <img src={eyebrow} className='eyeclose cursor-pointer' alt="Eye Close" width={25} height={20} onClick={() => setisPassVisible(!isPassVisible)} />

            }
          </div>
          <button className='reset-password'>Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassw