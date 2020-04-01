
export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    if(document.createElement(element).toString() == "[object HTMLUnknownElement]")
      throw new StepanError("Not valid tag name!!!");
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      if (!parent) throw new StepanError("parent is null or undefined");

      this.parent = parent;
    }
  }
}

class StepanError{
  constructor(message) {
    this.message = message;
    this.name = "StepanError"
  }
}