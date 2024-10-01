export class CartContext {
    static id = 1

    constructor() {
        this.cart = [] // this is where products will go
        this.listeners = [] // a collection of func that will listen to changes in cart
    }
    
    getCart() {
        return this.cart
    }
    addProduct(product){
        const newProduct = {
            id: CartContext.id++,
            quantity: 1,
            productId: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            description: product.description,
            image: product.image,
        }
        this.cart.push(newProduct)
        this.notifyListeners()
        
    }
    updateQuantity(productId){
        this.cart.forEach(item =>{
                if(item.productId === productId){
                    item.quantity++
                }
        })
        this.notifyListeners()
    }

    removeProduct(id){
        this.cart = this.cart.filter(cart => cart.id !== id)
        this.notifyListeners()
    }
    subscribe(listener) {
        this.listeners.push(listener)
    }
    
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
    }
}