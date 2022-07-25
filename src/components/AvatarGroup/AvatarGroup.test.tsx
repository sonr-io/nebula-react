import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { AvatarGroupProps, AvatarGroupSize } from "../../types/avatarGroupProps";
import { AvatarGroup, avatarGroupMaxElements } from './';

const setup = (props: AvatarGroupProps) => {
  const utils = render(<AvatarGroup {...props} />)
  const avatars = utils.queryAllByTestId('nebula-avatar');
  return {
    avatars,
    ...utils,
  }
}

beforeEach(() => {
  jest.resetModules();
});

test("AvatarGroup should be defined", () => {
  expect(AvatarGroup).toBeTruthy();
});

test("AvatarGroup should be a function", () => {
  expect(typeof AvatarGroup).toBe("function");
});

test.each(Object.entries(avatarGroupMaxElements))('AvatarGroup should render max entries for %s size', (size, maxElements) => {
  const entries = Array.from(Array(maxElements).keys()).map(i => ({ alt: `A${i}` }));
  const { avatars } = setup({ avatars: entries, size: size as AvatarGroupSize });
  expect(avatars).toHaveLength(maxElements);
});
