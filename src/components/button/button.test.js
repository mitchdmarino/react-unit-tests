import {Button} from "./button"
import { fireEvent, render } from "@testing-library/react"

const makeSut = (props) => {
    return render(<Button label="label" onClick={jest.fn()} {...props} />)
}

describe("<Button />", () => {
    test("Should render label correctly", () => {
        const {getByText} = makeSut({label: "My Button"})

        expect(getByText(/My Button/)).toBeInTheDocument()
    })

    test("Should call onClick successfully", () => {
        const spy = jest.fn()

        const {getByText} = makeSut({onClick:spy})
        fireEvent.click(getByText(/label/))

        expect(spy).toHaveBeenCalled()
    })
})