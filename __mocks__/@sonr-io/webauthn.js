/*
    How 
*/

// import module using jest mock wrapper.
const webauthn = jest.mock('@sonr-io/webauthn');

// start of function stubs

// UserLogin stub
function startUserLogin(config) { 
    return true;
}

// UserRegistration stub
function startUserRegistration(config) {
    return true;
}

webauthn.startUserRegistration = startUserRegistration;
webauthn.startUserLogin = startUserLogin;