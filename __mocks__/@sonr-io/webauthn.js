/*
    Mocking of @sonr-io/webauthn module
    - startUserLogin
    - startUserRegistration
*/

// import module using jest mock wrapper.
const webauthn = jest.mock('@sonr-io/webauthn');

// start of function stubs

// UserLogin stub
function startUserLogin(_config) {
  return true;
}

// UserRegistration stub
function startUserRegistration(_config) {
  return true;
}

webauthn.startUserRegistration = startUserRegistration;
webauthn.startUserLogin = startUserLogin;
