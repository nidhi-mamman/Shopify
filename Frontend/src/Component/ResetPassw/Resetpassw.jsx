import './ResetPassw.css'
import Key from '../../assets/reset.png'

const ResetPassw = () => {
  return (
    <div className='otp-container'>
      <div className="reset-area">
        <form method='POST' className="reset-form">
          <img src={Key} className='key' />
          <h1>Reset Your Password</h1>
          <input type="text" className="otp-input" placeholder='Enter OTP' />
          <input type="text" className="reset-pass" placeholder='New Password' />
          <button className='reset-password'>Reset Password</button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassw