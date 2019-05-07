import React, { Component } from "react";
import axios from "axios";
import "./Trend.css"

class Trend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trend: []
    };
  }
  componentDidMount() {
    this.getAllTrend();
  }
  getAllTrend = () => {
    axios.get("/api/trend").then(res => {
      console.log(res.data);
      this.setState({
        trend: res.data
      });
    });
  };
  render() {
    const trend = this.state.trend.map(trend => {
      console.log(trend);
    
    return (
      <div className="topics-container" key={trend.trend_id}>
        <div className="topics-wrapper">
          {/* <div className="topics-close"> */}
            {/* <svg className="topics-close-icon"> */}
              {/* <use className="icons-cross"> */}
                {/* <svg className="">

                // </svg> */}
              {/* </use> */}
            {/* </svg> */}
          {/* </div > */}
          <div className="topics-content">
            {/* <div className="topics-title">All Topics</div> */}
            <div className="topics-list"> 
              <a className="topics-border">
                <div className="topics-items">
                  <div className="topics-img">
                    <img src={trend.cover_art}/>
                  </div>
                  <div className="topics-name">
                  <h2>{trend.title}</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
   
      </div>
    );
  });
  return <div>{trend}</div>
  }
}

export default Trend;
    