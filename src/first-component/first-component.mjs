const template = document.createElement('template');

template.innerHTML = `
  <style>
    :host {
      display: block;
      font-family: sans-serif;
      background-color: azure;
    }

    h3,
    p {
      padding: 16px;
    }
  </style>
  <h3>First Very Basic Custom Web Component</h3>
  <p>A simple web component with primitive shadow DOM built natively in a single<code>.mjs</code> file.</p>
  <slot name="not"><p>Fallback Slot Content but only appears if it has a <code>name</code> attribute and another named slot is filled out.</p></slot>
  <slot name="here"></slot>
`;

class FirstComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('first-component', FirstComponent);
