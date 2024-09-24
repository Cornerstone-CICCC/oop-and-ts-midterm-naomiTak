import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props){
    super(props)
    this.state = { items: [] }
    this.updateItems = this.updateItems.bind(this)
    this.props.cartContext.subscribe(this.updateItems)
    this.cartListElement = null
  }

  updateItems(items){
    this.state.items = items;
    this.cartListElement.innerHTML = ''

    this.state.items.forEach(item => {
      const todoItem = new CartItem({
        item,
        cartContext: this.props.cartContext
      })
      this.cartListElement.appendChild(todoItem.render())
    })
  }
  render() {
    console.log(this.props.cartContext)
    const cartListElement = document.createElement('div')
    cartListElement.className = "todo-list"
    cartListElement.innerHTML = `
      <h3>Cart</h3>
      <p>${this.props.cartContext.cart.length}</p>
      <ul></ul>
    `

    this.cartListElement = cartListElement.querySelector('ul')
    
    return cartListElement;
  }
}