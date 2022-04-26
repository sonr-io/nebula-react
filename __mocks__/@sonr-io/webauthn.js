/*
    How 
*/

// import module using jest mock wrapper.
const webauthn = jest.mock('@sonr-io/webauthn');

// start of function stubs

// UserLogin stub
function startUserLogin() { 

    return true;
}

webauthn.startUserLogin = startUserLogin;

