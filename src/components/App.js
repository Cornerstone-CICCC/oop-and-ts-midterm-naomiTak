import { Component } from "../common/Component.js";
import { Header } from "../components/Header.js"
import { ProductList } from "../components/ProductList.js"
import { CartList } from "../components/CartList.js"

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <div class="header_wrapper"></div>
      <div class="content_wrapper">
        <main>
          <h1>Welcome to my cool shop</h1>
        </main>
        <aside></aside>
      </div>
      <div class="footer_wrapper"></div>
    `
    const header = new Header({ cartContext: this.props.cartContext }).render()
    const productList = new ProductList({ cartContext: this.props.cartContext })
    const cart = new CartList({ cartContext: this.props.cartContext }).render()


    appContainer.querySelector('.header_wrapper').appendChild(header)
    productList.mount(appContainer.querySelector('main'))
    appContainer.querySelector('aside').appendChild(cart)

    return appContainer;
  }
}