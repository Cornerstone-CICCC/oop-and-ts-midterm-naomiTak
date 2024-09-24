import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    console.log(this.props.cartContext)
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    const product = document.createElement('div')
    product.innerHTML = `
      <h3>${this.props.product.title}</h3>
      <img src="${this.props.product.image}">
      <p>${this.props.product.price}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `

    // Add click event to add to cart button
    product.querySelector('.add-to-cart-btn').addEventListener('click', this.handleAddToCart)

    return product;
  }
}