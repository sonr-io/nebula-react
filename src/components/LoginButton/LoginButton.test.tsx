import { LoginButton} from "./LoginButton";
import {screen} from '@testing-library/dom';

// For webauthn we should import the mock and not the actual implementation.
// See __mocks__ for more info
jest.mock("@sonr-io/webauthn");

/* 
    NON Complete unit test example to test correct configuration of mocks and jest.
    Should be implemented completely in the following sprints.
    Some guidance on testing implementations

    - test for inital component 'truthy' should be defined once imported as a module
    - test for callbacks / custom behavior being invoked
    - test custom props being respected in each component
*/

beforeEach(() =>  {
    jest.resetModules();
});

test('RegisterButton Should be defined', () => {
    const wrapper = () => {
        return (
            <div className="flex flex-col items-center mx-auto p-8">
                <LoginButton
                    domain="foo"
                    label="Login"
                    styling={"inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"}
                    onLogin={(result: boolean ) => expect(result).toBeTruthy()} 
                    onError={function (error: any): void { }
                }/>
            </div>
        );
    }
    expect(wrapper()).toBeTruthy();
});