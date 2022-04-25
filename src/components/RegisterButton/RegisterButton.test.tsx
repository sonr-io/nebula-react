import { RegisterButton } from "./RegisterButton";
import {screen} from '@testing-library/dom'

test('RegisterButton Should be defined', () => {
    const wrapper = () => {
        return (
        <div className="flex flex-col items-center mx-auto p-8">
            <RegisterButton
              domain="foo"
              label="Login"
              styling={"inline-flex items-center px-4 py-2 text-white bg-primaryLight-500 rounded hover:bg-primaryLight-700"}
              onRegister={() => alert("Login!")} 
              onError={function (error: any): void {
            }}/>
        </div>
        );
    }
    expect(wrapper()).toBeTruthy();
});