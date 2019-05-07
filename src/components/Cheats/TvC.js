import React, { Component } from "react";
import axios from "axios";
import YouTube from 'react-youtube';

class TC extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    this.loadVids();
  }
  loadVids() {
    var key = process.env.REACT_APP_API_KEY;
    var playlistId = "PL3olrdOteT75f1izn0e5tOW39taekjmR1";
    var URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=10&playlistId=PL3olrdOteT75f1izn0e5tOW39taekjmR1&key=${key}`;
   
    var options = {
      part: "snippet",
      key: key,
      maxResults: 10,
      playlistId: playlistId
    };
    axios.get(URL, options).then(res => {
      this.setState({
        items: res.data.items
      });
    });
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    console.log(this.state.items);
    const videos = this.state.items.map(video => {
      const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: -1
        }
      };
      return (
        <div className="Mbul">
          <div className="sharingcare">
          <YouTube 
            videoId={video.contentDetails.videoId}
            opts={opts}
            onReady={this._onReady}
          /></div>
           <div className="sharebuttons"></div>
        </div>
      );
    });
    return <div>{videos}</div>;
  }
}

export default TC;