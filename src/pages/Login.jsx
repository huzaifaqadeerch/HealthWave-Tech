const LoginPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mx-auto login-box">
          <h3 className="text-center">Login</h3>

          <input type="email" className="login-input" placeholder="Email" />
          <input type="password" className="login-input" placeholder="Password" />

          <button className="login-submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
