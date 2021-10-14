import { createElement } from "./elements.js";

// Creates the title component
export function createTitleComponent() {
  // Create <h1 class="title">Birthday Info 🎂</h1>
  const titleElement = createElement("h1", {
    textContent: "Birthday Info 🎂",
    className: "title",
  });

  // Return it
  return titleElement;
}
export function createResultComponent() {
  const resultComponent = createElement("h2", {
    textContent: "",
    className: "date",
  })
}
