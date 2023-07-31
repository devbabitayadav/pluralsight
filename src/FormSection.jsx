import React from 'react'
import Logo from "./assets/login-logo.png"

const FormSection = () => {
  return (
    <>

<div className="form-section">
          <img src={Logo} alt="" />
            <form>
              <label htmlFor="email">Email or Username</label>
              <input placeholder="Enter Email here" type="email" required />
                <label htmlFor="password">Password</label>
                <input placeholder="Password" type="text" required />
                  <button className="submit-btn">Sign In</button>
                </form>
                <div className="form-links">
                  <a href="#">Forgot Password?</a>
                  <a href="#">Login with company or school</a>
                </div>
                <span>
                  <button> Create an account</button>

                </span>
                <p>copyright © 2004 - 2023 Pluralsight LLC. All rights reserved.</p>
                <a href="">Terms of Use | Privacy Policy</a>
             </div>
    </>
  )
}

export default FormSection
