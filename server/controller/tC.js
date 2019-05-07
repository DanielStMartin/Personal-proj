module.exports = {
  favTrend: (req, res, next) => {
    res.status(200).send(favTrend);
  },
  getAllTrend: (req, res) => {
    const db = req.app.get("db");
    // console.log("yes");

    db.get_trend()
      .then(trend => {
        // console.log(trend);
        res.status(200).send(trend);
      })
      .catch(err => console.log(err.detail));
  },
  userAddFavTrend: (req, res) => {
    let { title, cover_art } = req.body;
    let newFavTrend = {
      id,
      title,
      cover_art
    };
    favTrend.push(newFavTrend);
    id++;
    res.status(200).send(favTrend);
  },

  favTrendDelete: (req, res) => {
    let { id } = req.params;
    let newFavTrend = favTrend.findIndex(trend => {
      return +id === trend.id;
    });
    if (newFavTrend === -1) {
      res.status(500).send(`error`);
    } else {
      favTrend.splice(newFavTrend, 1);
      res.send(favTrend);
    }
  }
};
