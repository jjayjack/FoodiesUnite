function Login() {
    return (
            <div className="d-flex flex-column customCenter">
                <h2 className="text-center">Login</h2>
                <div className="form-group mx-auto" style="width: 350px">
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="input-group mb-3 mx-auto" style="width: 350px">
                    <input type="password" className="form-control" placeholder="password" aria-label="Password" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-light" type="button" id="button-addon2">Submit</button>
                    </div>
                </div>
                <p className="text-center">Don't have an account? <a href="../Signup/Signup" className="text-white">Sign up!</a></p>
            </div>
    )
}

export default Login;