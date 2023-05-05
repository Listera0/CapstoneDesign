function Login() {
  return (
    <div>
      <br></br>

      <header className='welcome-header'>
        <h1 className='welcome-header__title'>Welcome to Developer Plus</h1>
        <p className='welcome-header__text'>
          If you have a Developer Plus Account, login with your Email.
        </p>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <form action='/home.html' method='POST' className='login-form'>
          <input type='email' placeholder='Email' required></input>
          <input type='password' placeholder='Password' required></input>

          <input type='submit' value='Sign In'></input>
          <button type='button'>카카오계정으로 로그인</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
