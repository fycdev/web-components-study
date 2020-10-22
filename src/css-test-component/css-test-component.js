const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="./css-test-component/css-test-component.css">
  <style>
    :host {
      display: block;
      font-family: sans-serif;
    }
  </style>
  <h1>Test Title</h1>
`;

class CssTestComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('css-test-component', CssTestComponent);
