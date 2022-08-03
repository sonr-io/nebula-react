import { render } from '@testing-library/react'
import { DropdownOption } from "./DropdownOption"

jest.mock("../../assets/outline/Document.svg", () => "document-svg")
jest.mock("../../assets/filled/Document.svg", () => "document-svg")
jest.mock("../../assets/duotone/Document.svg", () => "document-svg")

beforeEach(() => {
    jest.resetModules();
});  

describe('DropdownOption component', () => {
    test('should render', () => {
        const { asFragment } = render(
            <DropdownOption  
                title='Option 1'
                leftIconName='Document'
                leftIconType='outline'
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})