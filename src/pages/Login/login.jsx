import "./login.css"; // importante: importar tu hoja de estilos

//vista del login 
function Login() {
  return (
    <div className="login-container">
      <h1>Hello Welcome</h1>

      <form className="login-form">
        <h2>Login</h2>

        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
