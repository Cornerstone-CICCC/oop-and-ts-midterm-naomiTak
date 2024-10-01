import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart(productId) {
    const result = this.props.cartContext.cart.some((item) => item.productId === productId)
    if (result){
      this.props.cartContext.updateQuantity(productId)
    }else{
      this.props.cartContext.addProduct(this.props.product)
    }
  }

  render() {
    const product = document.createElement('div')
    product.className = "product-item"
    product.innerHTML = `
      <div class="product-image-area">
        <img src="${this.props.product.image}">
      </div>
      <div  class="product-info-area">
        <div class="item-title">
          <p class="title">${this.props.product.title}</p>
        </div>
        <p>$${this.props.product.price}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    `

    // Add click event to add to cart button
    product.querySelector('.add-to-cart-btn').addEventListener('click', () => this.handleAddToCart(this.props.product.id))

    return product;
  }
}