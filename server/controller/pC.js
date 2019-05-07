
module.exports = {
    getAll: (req, res) => {
      const db = req.app.get("db");
  
      db.get_product()
        .then(product => {
          res.status(200).send(product);
        })
        .catch(err => console.log("issue with getting all", err));
    },
    addToCart: (req, res) => {
      const { user_id } = req.session.user;
      console.log(user_id, "nope")
      const db = req.app.get("db");
      const { product_id, quantity } = req.body;
      let UserCart = [];
      db.get_UserCart(user_id).then(Response => {
        UserCart = Response;
        console.log("checking cart here 1st");
        let index = UserCart.findIndex(
          product => product.product_id === +req.params.product_id
        );
        console.log("checking index", index);
        if (index !== -1) {
          console.log("Cartcheck", UserCart[index]);
          let {user_cart_id} = UserCart[index]
          let newQuantity = UserCart[index].quantity;
          newQuantity += 1;
          console.log(newQuantity, "going to murder somwone soon, maybe, yepp");
          let finalQuantity = quantity ? quantity : newQuantity;
          console.log(
            typeof finalQuantity,
            user_cart_id,
            product_id,
            finalQuantity
          );
  
          db.updateUserCart([user_cart_id, finalQuantity]).then(
            product => {
              res.status(200).send(product);
            }
          );
        } else {
          db.UserCart([product_id, user_id])
            .then(product => {
              res.status(200).send(product);
            })
            .catch(err => {
              res
                .status(500)
                .send({ message: "got an issue serverside", err });
            });
        }
      });
    },
  
    getproductFromCart: (req, res) => {
      const db = req.app.get("db");
      console.log("pC getproduct");
      const user_id = req.session.user.user_id;
      db.get_product_From_Cart(user_id).then(product => {
          res.status(200).send(product);
        })
        .catch(err => {
          console.log("error in get product from cart", err);
          res
            .status(500)
            .send("got a problem with product in the cart func");
        });
    },
    removeFromCart: (req, res) => {
      const db = req.app.get("db");
      const { user_cart_id } = req.query;
      console.log("remove from cart LABEL", req.query)
      db.remove_product(user_cart_id)
        .then(product => {
          res.status(200).send(product);
        })
        .catch(err =>
          console.log("problem with removing items in the server", err)
        );
    },
  
    updateCartQuantity: (req, res) => {
      const db = req.app.get("db");
      const { quantity } = req.body;
      const { user_cart_id } = req.params;
      db.updateUserCart([user_cart_id,quantity])
        .then(product => {
          res.status(200).send(product);
        })
        .catch(err =>
          console.log("probelm updating, check server")
        );
    },
  
  
  
  
    
  };