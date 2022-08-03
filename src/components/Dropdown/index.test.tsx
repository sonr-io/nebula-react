import { render } from '@testing-library/react'
import { Dropdown } from "./Dropdown"

jest.mock("../../assets/outline/DocumentText1.svg", () => "document-text1-svg")
jest.mock("../../assets/filled/DocumentText1.svg", () => "document-text1-svg")
jest.mock("../../assets/duotone/DocumentText1.svg", () => "document-text1-svg")
jest.mock("../../assets/outline/Document.svg", () => "document-svg")
jest.mock("../../assets/filled/Document.svg", () => "document-svg")
jest.mock("../../assets/duotone/Document.svg", () => "document-svg")
jest.mock("../../assets/outline/ArrowDown.svg", () => "arrow-down-svg")
jest.mock("../../assets/filled/ArrowDown.svg", () => "arrow-down-svg")
jest.mock("../../assets/duotone/ArrowDown.svg", () => "arrow-down-svg")


beforeEach(() => {
    jest.resetModules();
});  

describe('Dropdown component', () => {
    test('should render', () => {
        const { asFragment }  = render(
            <Dropdown  
                options={[{
                    title: 'Option 1',
                    leftIconName: 'Document',
                    leftIconType: 'outline'
                }]}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})