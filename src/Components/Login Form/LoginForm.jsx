import React, { useState } from 'react'
import './LoginForm.css'
import './Responsive.css'
import Modal from 'react-modal';


function LoginForm() {
    const [popup, setPopup] = useState(true)
    const [otp, setOtp] = useState('');

    const closeModal = () => setPopup(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP Submitted:', otp);
        // Add OTP verification logic here
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    return (
        <div>

            <div className="form-container " >
                <div className="form-back-img w-100 ">
                    <img src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/T3o70nnu5t.jpg" className='w-100 login-form-img' alt="" />
                </div>
                <div className="form-container-box">
                    <div className='p-3'>
                        <h4>Sign In</h4>
                        <form action="">
                            <input type="text" className='form-control shadow-none form-input' placeholder='Email' />
                            <input type="text" name="" className='form-control shadow-none form-input' id="" placeholder='Password' />
                            <button type="button" class="btn btn-form w-100">Sign In</button>
                        </form>
                        <p className='text-center'>Don't have an account</p>
                        <p className="text-center cursor-p green-t">Sign Up</p>
                    </div>
                </div>
                <Modal isOpen={popup} style={customStyles} ariaHideApp={false}>
                    <div className="d-flex justify-content-end">
                        <i className="fa-solid fa-x cursor-pointer" onClick={closeModal}></i>
                    </div>

                    <div className="p-3">
                        <h4 className='m-0'> Verify OTP</h4>
                        <form onSubmit={handleSubmit}>
                            <p className="text-muted m-0">niyaf@gmail.com</p>
                            <input
                                type="text"
                                className="form-control shadow-none form-input m-0"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={6}
                                autoFocus
                                aria-label="Enter OTP"
                            />
                            <button type="submit" className="btn btn-form w-100 mt-3">
                                Sign In
                            </button>
                        </form>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default LoginForm
