function Signup() {
    return (
        <div className="d-flex flex-column customCenter">
            <h2 className="text-center">Sign up</h2>
            <div className="form-group mx-auto" style="width: 350px">
                <input type="text" className="form-control" id="usernameInput" placeholder="Username" />
            </div>
            <div className="form-group mx-auto" style="width: 350px">
                <input type="text" className="form-control" id="nameInput" placeholder="First and Last Name" />
            </div>
            <div className="form-group mx-auto" style="width: 350px">
                <input type="email" className="form-control" id="emailInput" placeholder="Email" />
            </div>
            <div className="form-group mx-auto" style="width: 350px">
                <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
            </div>
            <div className="input-group mb-3 mx-auto" style="width: 350px">
                <input type="password" className="form-control" placeholder="Confirm Password" aria-label="confirmPassword"
                    aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-light" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
            <p className="text-center">Already have an account? <a href="../Login/Login" className="text-white">Log in!</a>
            </p>
        </div>
    )
}

export default Signup;