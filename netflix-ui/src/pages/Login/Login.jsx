import './Login.scss';

const Login = () => {
    return (
        <div className='login'>
            <div className="top">
                <img className='logo' src="https://seeklogo.com/images/N/netflix-n-logo-0F1ED3EBEB-seeklogo.com.png" alt="Netflix Logo" />
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or mobile number' />
                    <input type="password" placeholder='Password' />
                    <button className='loginButton'>Sign In</button>
                    <span>
                    New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </small>
                </form>
                
            </div>
        </div>
    );
}

export default Login;