/*
    Mocking of @sonr-io/webauthn module
    - startUserLogin
    - startUserRegistration
*/

// import module using jest mock wrapper.
const webauthn = jest.mock('@sonr-io/webauthn');

// start of function stubs
const startUserLogin = (_config) => Promise.resolve(true);
const startUserRegistration = (_config) => Promise.resolve(true);

webauthn.startUserLogin = startUserLogin;
webauthn.startUserRegistration = startUserRegistration;

module.exports = webauthn;
