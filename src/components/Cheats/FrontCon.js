// import React, { Component } from "react";
// import Trend from "../Trend"
// import axios from "axios";

// class Tapp extends Component {
//   constructor(trend) {
//     super();
//     this.state = {
//       Trend: [],
//     };
//     this.getAllTrend = this.getAllTrend.bind(this);
//     // this.getFavTrend = this.getFavTrend.bind(this);
  
//   }
//   componentDidMount() {
//     this.getAllTrend();
//     // this.getFavTrend();
//   }

//   getAllTrend = () => {
//     axios
//       .get("/api/trend")
//       .then(res => {
//           // console.log(res, "12")
//         this.setState({
//           Trend: res.data
//         });
//       })
//       .catch(err => {
//         console.log(`Something went wrong Could not GET from ALL`, err);
//       });
//   };
//   getFavTrend = () => {
//     axios
//       .get("/api/favtrend")
//       .then(response => {
//         this.setState({
//           Favorites: response.data
//         });
//       })
//       .catch(err => {
//         console.log(`Something went wrong Could not GET Favorites`, err);
//       });
//   };
//   addToFavorites = trend => {
//     let favTrend = {
//         trending_topics__name,
//         img
//     };
//     axios
//       .post("/api/favtrend", favTrend)
//       .then(response => {
//         this.setState({
//           Favorites: response.data
//         });
//       })
//       .catch(err => {
//         console.log(`Something went wrong Could not POST to Favorites`, err);
//       });
//   };
//   favDelete = trend => {
//     axios
//       .delete(`/api/favtrend/${trend.id}`)
//       .then(res => {
//         this.setState({
//           Favorites: res.data
//         });
//       })
//       .catch(err => {
//         console.log(`Something went wrong Could not Delete`, err);
//       });
//   };
  // render() {
  //   return (
  //     <div className="Tapp">
        {/* <UserFavorites
          Favorites={this.state.Favorites}
          favDelete={this.favDelete}
        /> */}
        {/* <Trend */}
        //   addToFavorites={this.addToFavorites}
          // Trend={this.state.Trend}
        
        {/* <Footer Footer={this.state.Footer} scrollPage={this.scrollPage} /> */}
      {/* </div> */}
//     );
//   }
// }

// export default Tapp;
