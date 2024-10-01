import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props){
    super(props)
    this.state = { items: [] }
    this.showCart = this.showCart.bind(this)
    this.updateItems = this.updateItems.bind(this)
    this.props.cartContext.subscribe(this.updateItems)
    this.cartListElement = null
  }

  showCart(){
    document.querySelector(".cart-list").classList.toggle("showing")
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
    const totalQuantity = this.props.cartContext.cart.reduce((sum, element) => {return sum + element.quantity}, 0);
    const totalPrice = this.props.cartContext.cart.reduce((sum, element) => {
      return (sum + (element.quantity*element.price*100))}, 0);
    
    if(totalQuantity > 0){
      const totalInfo = document.createElement("div");
      const paymentBtn = document.createElement("button");
      totalInfo.className = "total-info"
      totalInfo.innerHTML =`
        <div>Total quantity : ${totalQuantity}</div>
        <div>Total price : ${totalPrice/100}</div>
      `
      paymentBtn.className = "payment-btn"
      paymentBtn.innerHTML = `Payment`

    this.cartListElement.appendChild(totalInfo)
    this.cartListElement.appendChild(paymentBtn)

    document.querySelector(".show-cart").innerHTML = `Cart : <span class="show-items">${totalQuantity}</span>`
    }else{
      document.querySelector(".show-cart").innerHTML = `Cart :  ${totalQuantity}`
    }
  }
  render() {
    const cartAreaElement = document.createElement('div')
    cartAreaElement.className = "cart-area"
    cartAreaElement.innerHTML = '<button class="show-cart">Cart :  0</button>'
    cartAreaElement.querySelector(".show-cart").addEventListener('click', () => this.showCart())
    
    const cartListElement = document.createElement('div')
    cartListElement.className = "cart-list"
    cartListElement.innerHTML = `
      <h3 class="heading">Cart</h3>
      <ul></ul>
    `
    cartAreaElement.appendChild(cartListElement)

    this.cartListElement = cartListElement.querySelector('ul')
    
    return cartAreaElement;
  }
}