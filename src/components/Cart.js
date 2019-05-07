import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
     Cart: [],
      quanitity: null
    };
  }

  componentDidMount = () => {
    this.getproductFromCart();
  };

  getproductFromCart = () => {
    axios.get("/api/product").then(res => {
      this.setState({
       Cart: res.data
      });
    });
  };

  removeFromCart = user_cart_id => {
    axios.delete(`/api/product?user_cart_id=${user_cart_id}`).then(res => {
      this.getproductFromCart();
    });
  };
  editQuantity = (item, quantity) => {
    axios.put(`/api/product/${item}`, { quantity }).then(response => {
      this.getproductFromCart();
    });
  };

  render() {
    const product = this.state.Cart.map(product => {

      return (
        <div>
          <div className="product-container" key={product.product_id}>
            <h2>{product.name}</h2>
            {product.price}
            {product.description}
            <img src={product.image}></img>
          </div>
          <div className="quantity">
            <button>QTY {product.quantity}</button>
            &nbsp;
            <select
              defaultValue={product.quantity}
              onChange={event =>
                this.editQuantity(product.user_cart_id, event.target.value)
              }
              type="number"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <div className="remove-button">
              <button onClick={() => this.removeFromCart(product.user_cart_id)}>
                Remove from cart
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="Cart">
        {product[0] ? (
          <div>
            <Link to="/Checkout">
              <button>Checkout</button>
            </Link>

            {product}
          </div>
        ) : (
          <div>
            <h1>Cart is empty</h1>

            <Link to="/Store">
              <button>Return To Store</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;