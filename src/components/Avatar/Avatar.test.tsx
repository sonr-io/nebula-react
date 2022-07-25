import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Avatar, avatarSizes, lineHeight } from './';

beforeEach(() => {
  jest.resetModules();
});

test("Avatar should be defined", () => {
  expect(Avatar).toBeTruthy();
});

test("Avatar should be a function", () => {
  expect(typeof Avatar).toBe("function");
});

test("Avatar should be rendered with image", () => {
  // eslint-disable-next-line no-alert
  const { queryByTestId } = render(
    <Avatar src="src" alt="JD" />
  );
  const avatarImg = queryByTestId('nebula-avatar-img');
  const avatarAlt = queryByTestId('nebula-avatar-alt');

  expect(avatarImg).toBeTruthy();
  expect(avatarAlt).toBeFalsy();
});

test("Avatar should be rendered without image", () => {
  // eslint-disable-next-line no-alert
  const { queryByTestId } = render(
    <Avatar alt="JD" />
  );
  const avatarImg = queryByTestId('nebula-avatar-img');
  const avatarAlt = queryByTestId('nebula-avatar-alt');

  expect(avatarImg).toBeFalsy();
  expect(avatarAlt).toBeTruthy();
});

test("Avatar should be rendered small with image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar src="src" alt="JD" size="sm" />
  );

  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass(avatarSizes.sm)
});

test("Avatar should be rendered small without image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" size="sm" />
  );

  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass(avatarSizes.sm)

  const avatarAlt = getByTestId('nebula-avatar-alt');
  expect(avatarAlt).toHaveClass(lineHeight.sm)
});

test("Avatar should be rendered medium (default) with", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" />
  );
  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass(avatarSizes.md)
});

test("Avatar should be rendered medium (default) without image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" size="md" />
  );

  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass(avatarSizes.md)

  const avatarAlt = getByTestId('nebula-avatar-alt');
  expect(avatarAlt).toHaveClass(lineHeight.md)
});

test("Avatar should be rendered large with image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" size="lg" />
  );
  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass(avatarSizes.lg)
});

test("Avatar should be rendered large without image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" size="lg" />
  );

  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass(avatarSizes.lg)

  const avatarAlt = getByTestId('nebula-avatar-alt');
  expect(avatarAlt).toHaveClass(lineHeight.lg)
});

test("Avatar nearby should be rendered with extra border", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" size="lg" nearby />
  );

  const avatar = getByTestId('nebula-avatar');
  expect(avatar).toHaveClass('shadow-avatar');
});

test("Avatar offline should be rendered without extra border", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <Avatar alt="JD" size="lg" nearby={false} />
  );

  const avatar = getByTestId('nebula-avatar');
  expect(avatar).not.toHaveClass('shadow-avatar');
});
