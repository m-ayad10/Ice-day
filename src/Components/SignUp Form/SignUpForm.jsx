import React from 'react'


function SignUpForm() {
  return (
    <div>

      <div className="form-container " >
        <div className="form-back-img w-100 ">
          <img src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/T3o70nnu5t.jpg" className='w-100 login-form-img' alt="" />
        </div>
        <div className="form-container-box">
          <div className='p-3'>
            <h4>Sign up</h4>
            <form action="">
            <input type="text" className='form-control shadow-none form-input' placeholder='Full name' />
              <input type="text" className='form-control shadow-none form-input' placeholder='Email' />
              <input type="text" name="" className='form-control shadow-none form-input' id="" placeholder='Password' />
              <button type="button" class="btn btn-form w-100">Sign In</button>
            </form>
            <p className='text-center'>Don't have an account</p>
              <p className="text-center cursor-p green-t">Sign Up</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
