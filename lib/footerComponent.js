import { createElement } from "./elements.js";

export function createFooterComponent() {
  const footerElement = createElement(
    "footer",
    {
      className: "footer",
    },
    ["made with 🩸😓&😭"]
  );

  return footerElement;
}
