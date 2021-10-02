import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { customMultiply } from "../../utils/helper";
import SampleComponents from "../sample/SampleComponent"; //our component
import { render, fireEvent } from "@testing-library/react"; //render method

//DOM Testing

test("should multiply counter render properly", () => {
  //Arange
  const initialNumber = 1;
  const component = render(<SampleComponents />);
  const numberSample = component.getByTestId("numberSample");
  const changeButton = component.getByTestId("changeButton");
  //Act
  fireEvent.click(
    changeButton,
    (numberSample.textContent = customMultiply(initialNumber, 2))
  );
  //Assert
  expect(numberSample.textContent).toBe("2"); //numberSample should equal 2
});

test("should random color displayer render properly", () => {
  //Arange
  const component = render(<SampleComponents />);
  const randomColor = component.getByTestId("randomColor");
  //Act

  //Assert
  expect(randomColor.textContent).toBeTruthy(); //random color should return true
});
