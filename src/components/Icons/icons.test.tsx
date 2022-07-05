import fs from "fs";
import { join } from "path";
import { render } from "@testing-library/react";

beforeAll(() => {
  fs.readdirSync(join(__dirname, '..', '..', 'assets', 'filled')).forEach((fileName: string) => {
    const iconFileName = `../../assets/filled/${fileName}`;
    const iconMock = `${fileName.toLocaleLowerCase().replace('.', '-')}`;
    jest.doMock(iconFileName, () => iconMock);
  });
  fs.readdirSync(join(__dirname, '..', '..', 'assets', 'outline')).forEach((fileName: string) => {
    const iconFileName = `../../assets/outline/${fileName}`;
    const iconMock = `${fileName.toLocaleLowerCase().replace('.', '-')}`;
    jest.doMock(iconFileName, () => iconMock);
  });
  fs.readdirSync(join(__dirname, '..', '..', 'assets', 'duotone')).forEach((fileName: string) => {
    const iconFileName = `../../assets/duotone/${fileName}`;
    const iconMock = `${fileName.toLocaleLowerCase().replace('.', '-')}`;
    jest.doMock(iconFileName, () => iconMock);
  });
})

describe("Test Filled icons definition", () => {
  test('All should render', () => {
    import('./').then(({ Filled }) => {
      Object.entries(Filled).forEach(([iconTestId, Component]) => {
        const { queryByTestId } = render(<Component />);
        const icon = queryByTestId(iconTestId);
        expect(icon).toBeTruthy();
      })
    })
  })
});
describe("Test Outline icons definition", () => {
  test('All should render', () => {
    import('./').then(({ Outline }) => {
      Object.entries(Outline).forEach(([iconTestId, Component]) => {
        const { queryByTestId } = render(<Component />);
        const icon = queryByTestId(iconTestId);
        expect(icon).toBeTruthy();
      })
    })
  })
});
describe("Test DuoTone icons definition", () => {
  test('All should render', () => {
    import('./').then(({ DuoTone }) => {
      Object.entries(DuoTone).forEach(([iconTestId, Component]) => {
        const { queryByTestId } = render(<Component />);
        const icon = queryByTestId(iconTestId);
        expect(icon).toBeTruthy();
      })
    })
  })
});
