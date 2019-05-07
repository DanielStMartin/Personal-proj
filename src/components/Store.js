import React, { Component } from "react";
import axios from "axios";
import "./Store.css"

class product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      shoppingCart: []
    };
  }

  componentDidMount() {
    this.getAll();
  }

  getAll = () => {
    axios.get("/api/store").then(res => {
      console.log(res.data);
      this.setState({
        product: res.data
      });
    });
  };
  addToCart = product => {
    axios.post(`/api/product/${product.product_id}`, product).then(res => {
      console.log(product);
    });
  };

  render() {
    const product = this.state.product.map(product => {
      console.log(product);

      return (
        <React.Fragment>
          
          <div className="product-container" key={product.product_id}>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <h2>{"$" + product.price}</h2>
            &nbsp;
            <p>{product.description}</p>
         
          &nbsp;
          <div className="storefront-buttons">
            <button onClick={() => this.addToCart(product)}>Add to Cart</button>
           </div></div>
          </React.Fragment>
       
      );
    });
    return <div className="main-store">{product}</div>;
  }
}

export default product;