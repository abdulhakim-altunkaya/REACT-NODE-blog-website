const Login = () => {
  return(
    <div>
      <form action="/login" method="post" className="signuplogin">
        <h2>LOG IN</h2>
        <label htmlFor="loginEmail">Enter your E-mail</label>
        <input className="inputAreas" type="text" name="loginEmail" id="loginEmail" required />

        <label htmlFor="loginPassword">Enter your password</label>
        <input className="inputAreas" type="password" name="loginPassword" id="loginPassword" required />
        <button className="signupBtn" type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default Login;
