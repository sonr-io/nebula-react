import { SonrLogoWrapper, CloseIcon, InfoIcon, PersonIcon, Input, LabelInput, LoginButton, RegisterButton, RegisterForm, Avatar, SwitchButton } from "./index";

describe("Test imports from component's folder", () => {
  test("SonrLogoWrapper should be defined", () => {
    expect(SonrLogoWrapper).toBeTruthy();
  });
  test("CloseIcon should be defined", () => {
    expect(CloseIcon).toBeTruthy();
  });
  test("InfoIcon should be defined", () => {
    expect(InfoIcon).toBeTruthy();
  });
  test("PersonIcon should be defined", () => {
    expect(PersonIcon).toBeTruthy();
  });
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
