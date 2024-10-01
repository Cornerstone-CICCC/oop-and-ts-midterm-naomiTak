import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleUpdate(id) {
    this.props.cartContext.updateQuantity(id)
  }

  handleRemove(id) {
    this.props.cartContext.removeProduct(id)
  }

  render() {
    const itemElement = document.createElement('li')

    //console.log(this.props)
    itemElement.innerHTML = `
      <span class="cart-item-title">${this.props.item.title}</span>
      <div class="detail-info">
        <div class="image-area">
          <img src="${this.props.item.image}"/>
        </div>
        <div class="info-area">
          <div>
            <span>quantity : ${this.props.item.quantity}</span>
            <button id="btn-update">+</button><br>
            <button id='btn-delete'>Delete</button>
          </div>
        </div>
      </div>
    `

    itemElement.querySelector('#btn-update').addEventListener('click', () => this.handleUpdate(this.props.item.productId))
    itemElement.querySelector('#btn-delete').addEventListener('click', () => this.handleRemove(this.props.item.id))

    return itemElement;
  }
}