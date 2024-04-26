import './Register.scss';

import { useState, useRef } from 'react';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }

    return (
        <div className='register'>
            <div className="top">
                <img className='logo' src="https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png" alt="Netflix Logo" />
                <button className='loginButton'>Sign In</button>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                Ready to watch? 
                Enter your email or mobile number to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='Email Address' ref={emailRef} />
                        <button className='registerButton' onClick={handleStart}>Get Started</button>
                    </div>) : (
                    <form className="input">
                        <input type="password" placeholder='Password' ref={passwordRef} />
                        <button className='registerButton' onClick={handleFinish}>Finish</button>
                    </form>
                )}
                
                
            </div>
        </div>
    );
}

export default Register;