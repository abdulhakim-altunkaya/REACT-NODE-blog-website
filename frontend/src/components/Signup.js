const Signup = () => {

  return(
    <div>
      <form action="/signup" method="post" className="signuplogin">
        <h2>SIGN UP</h2>
        <label htmlFor="loginName">Enter your name</label>
        <input className="inputAreas" type="text" name="loginName" id="loginName" required />

        <label htmlFor="loginSurname">Enter your surname</label>
        <input className="inputAreas" type="text" name="loginSurname" id="loginSurname" required />

        <label htmlFor="loginEmail">Enter your E-mail</label>
        <input className="inputAreas" type="text" name="loginEmail" id="loginEmail" required />

        <label htmlFor="loginPassword">Enter your password</label>
        <input className="inputAreas" type="password" name="loginPassword" id="loginPassword" required />
        <button className="signupBtn" type="submit">SUBMIT</button>
      </form>
    </div>
  )

}

export default Signup;
