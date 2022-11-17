import Link from 'next/link';

const Signup = () => {
    return (
        <div className="account-wrapper">
            <h3 className="title">Sign Up</h3>
            <div className="account-form">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="userIdInput" placeholder="user-id" />
                    <label>User ID</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                        placeholder="name@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword"
                        placeholder="Password" />
                    <label>Password</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="confirmPass"
                        placeholder="Confirm Password" />
                    <label>Confirm Password</label>
                </div>
                <div className="form-group">
                    <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                        <div className="checkgroup">
                            <input type="checkbox" name="remember" id="remember" />
                            <label>Remember Me</label>
                        </div>

                        <Link href="/forgotpassword">
                        <a >Forgot Password?</a>
                        </Link>
                    </div>
                </div>
                <div className="form-group">
                    <button className="d-block default-btn move-top"><span>Signup Now</span></button>
                </div>
            </div>
            <div className="account-bottom">
                <span className="d-block cate pt-10">Already Have an Account? 
                
                <Link href="/signin">
                <a > Sign In</a>
                </Link>
                </span>
                
                <span className="or"><span>or</span></span>
                <h5 className="subtitle">Signup With Social Media</h5>
                <ul className="social-media social-color lab-ul d-flex justify-content-center">
                    <li>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                    </li>
                    <li>
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                    </li>
                    <li>
                        <a href="#" className="pinterest"><i className="icofont-pinterest"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Signup;