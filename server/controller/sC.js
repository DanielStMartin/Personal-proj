const stripe = require("../index");

module.exports = {
  buyStuff: (req, res) => {
    console.log(req);
    const stripeToken = req.body.stripeToken;
    stripe.stripe.charges
      .create({
        amount: 100 * req.body.endReceipt,
        currency: "usd",
        description: "TEST CHARGE",
        source: stripeToken
      })
      .then(results => {
        res.status(200).send(results);
      })
      .catch(err => {
        console.error("Error with products/store", err);
        res
          .status(500)
          .send({ message: "This is a catch for stripe" });
      });
  }
};