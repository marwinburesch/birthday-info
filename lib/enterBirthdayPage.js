import { createElement } from "./elements.js";

// 📝 The onSubmit argument is not used. It should tell the parent component when the form is submitted and bypass the birthday.
// 📝 A submit input/button is missing

// Creates the page to enter the birthday
export function createEnterBirthdayPage(onSubmit) {
// Creates <input type="date" />
  const birthdayInput = createElement("input", {
    type: "date",
  });

// Create Submit Button
  const submitButton = createElement("button",{
    type: "submit",
    textContent: "Submit",
    className: "submitButton",
  });
// create Date Button
  const dateP = createElement("p",{
    type: "p",
    textContent: /* enterfunctionhere */ "",
    className: "dateP",
  });

  // Create a form element
  const formElement = createElement("form", { className: "imputArea" }, [birthdayInput, submitButton]);

  return formElement;
}
