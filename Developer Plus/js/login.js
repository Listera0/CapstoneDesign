const signupName = document.querySelector('#signup input:first-child');
const signup = document.querySelector('#signup');

function onSignupBtnClick() {
  const username = signupName.value;
  console.log(username);
}

signup.addEventListener('submit', onSignupBtnClick);
