import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AvatarGroup, avatarGroupSizes, lineHeight } from './';

beforeEach(() => {
  jest.resetModules();
});

test("AvatarGroup should be defined", () => {
  expect(AvatarGroup).toBeTruthy();
});

test("AvatarGroup should be a function", () => {
  expect(typeof AvatarGroup).toBe("function");
});

test("AvatarGroup should be rendered with image", () => {
  // eslint-disable-next-line no-alert
  const { queryByTestId } = render(
    <AvatarGroup src="src" alt="JD" />
  );
  const avatarGroupImg = queryByTestId('nebula-avatar-group-img');
  const avatarGroupAlt = queryByTestId('nebula-avatar-group-alt');

  expect(avatarGroupImg).toBeTruthy();
  expect(avatarGroupAlt).toBeFalsy();
});

test("AvatarGroup should be rendered without image", () => {
  // eslint-disable-next-line no-alert
  const { queryByTestId } = render(
    <AvatarGroup alt="JD" />
  );
  const avatarGroupImg = queryByTestId('nebula-avatar-group-img');
  const avatarGroupAlt = queryByTestId('nebula-avatar-group-alt');

  expect(avatarGroupImg).toBeFalsy();
  expect(avatarGroupAlt).toBeTruthy();
});

test("AvatarGroup should be rendered small with image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup src="src" alt="JD" size="sm" />
  );

  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass(avatarGroupSizes.sm)
});

test("AvatarGroup should be rendered small without image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" size="sm" />
  );

  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass(avatarGroupSizes.sm)

  const avatarGroupAlt = getByTestId('nebula-avatar-group-alt');
  expect(avatarGroupAlt).toHaveClass(lineHeight.sm)
});

test("AvatarGroup should be rendered medium (default) with", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" />
  );
  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass(avatarGroupSizes.md)
});

test("AvatarGroup should be rendered medium (default) without image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" size="md" />
  );

  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass(avatarGroupSizes.md);

  const avatarGroupAlt = getByTestId('nebula-avatar-group-alt');
  expect(avatarGroupAlt).toHaveClass(lineHeight.md)
});

test("AvatarGroup should be rendered large with image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" size="lg" />
  );
  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass(avatarGroupSizes.lg)
});

test("AvatarGroup should be rendered large without image", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" size="lg" />
  );

  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass(avatarGroupSizes.lg)

  const avatarGroupAlt = getByTestId('nebula-avatar-group-alt');
  expect(avatarGroupAlt).toHaveClass(lineHeight.lg)
});

test("AvatarGroup online should be rendered with extra border", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" size="lg" online />
  );

  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).toHaveClass('shadow-avatar-group');
});

test("AvatarGroup offline should be rendered without extra border", () => {
  // eslint-disable-next-line no-alert
  const { getByTestId } = render(
    <AvatarGroup alt="JD" size="lg" online={false} />
  );

  const avatarGroup = getByTestId('nebula-avatar-group');
  expect(avatarGroup).not.toHaveClass('shadow-avatar-group');
});
