import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleUpdate(id) {
    //this.props.cartContext.updateTodo(id)
  }

  handleRemove(id) {
    this.props.cartContext.removeProduct(id)
  }

  render() {
    const itemElement = document.createElement('li')

    console.log(this.props)
    itemElement.innerHTML = `
      <span>${this.props.item.title}</span>
      <div>
        <button id='btn-delete'>Delete</button>
      </div>
    `

    //todoElement.querySelector('#btn-complete').addEventListener('click', () => this.handleUpdate(this.props.todo.id))
    itemElement.querySelector('#btn-delete').addEventListener('click', () => this.handleRemove(this.props.item.id))

    return itemElement;
  }
}