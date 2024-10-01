import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('footer')
    footer.innerHTML = `
      <div>
        <p>© 2024 All rights reserved.</p>
      </div>
    `
    return footer;
  }
}