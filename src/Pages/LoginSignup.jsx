import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <input type="password" placeholder="Password"/>
        </div>
        <button>Continue</button>
        <p>Already have an account? <span>Log In</span></p> 
        <div className="loginsignup-agree">
          <input type="check-box" name='' id=''/>
          <p>By continuing i agree to the terms of use and privacy policy</p>
        </div>               
      </div>
    </div>
  )
}

export default LoginSignup