import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('header')
    header.innerHTML = `
      <div class="header-area">
        <img class="logo"src="../image/icon1.svg">
        <span class="page-title"><span class="underline">Shoping</span>
      </div>
    `

    return header;
  }
}