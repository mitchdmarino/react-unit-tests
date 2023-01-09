import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

// test block
test("increments counter", () => {
    // render the component on virtual dom
    render(<Counter/>)

    // select the elements you want to interact with
    const counter = screen.getByTestId("counter")
    const incrementBtn = screen.getByTestId("increment")

    // iteract with those elements
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)

    // assert the expected result
    expect(counter).toHaveTextContent("2")
})


///////////////////// TEST BLOCK /////////////////////
// test() or it() act the same. Each takes 2 parameters
//      -- name the test
//      -- callback function (describes the actual test)
// render the component on the virtual DOM using RENDER method
// Screen Property from react testing library to select elements
// fireEvent to interact with the button
// assert the result using EXPECT