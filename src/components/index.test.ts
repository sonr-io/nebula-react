import { Input, LabelInput, LoginButton, RegisterButton, RegisterForm, Avatar, SwitchButton } from "./index";

describe("Test imports from component's folder", () => {
  test("Avatar should be defined", () => {
    expect(Avatar).toBeTruthy();
  });
  test("Input should be defined", () => {
    expect(Input).toBeTruthy();
  });
  test("LabelInput should be defined", () => {
    expect(LabelInput).toBeTruthy();
  });
  test("LoginButton should be defined", () => {
    expect(LoginButton).toBeTruthy();
  });
  test("RegisterButton should be defined", () => {
    expect(RegisterButton).toBeTruthy();
  });
  test("RegisterForm should be defined", () => {
    expect(RegisterForm).toBeTruthy();
  });
  test("SwitchButton should be defined", () => {
    expect(SwitchButton).toBeTruthy();
  });
})
