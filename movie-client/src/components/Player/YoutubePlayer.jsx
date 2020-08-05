import PropTypes from 'prop-types';
import React from 'react';

// import 'style/YouTubeVideo.module.css';

var intervalCurrentTime = null;

class YouTubeVideo extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      player:null,
      currentTime:null,
    }
  }

  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded
  
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
    } else { // If script is already there, load the video directly
      this.loadVideo();    
    }

    
  };

  loadVideo = () => {
    const { id } = this.props;
    // the Player object is created uniquely based on the id in props
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: id,
      events: {
        onReady: this.onPlayerReady,
      },
    })
  };

  onPlayerReady = event => {
    event.target.playVideo();

    intervalCurrentTime =  setInterval(() => {
      if(this.player !== undefined && this.player !== null){
        // let currentTime = null;
        this.setState({currentTime:this.player.getCurrentTime()})
        // currentTime = this.player.getCurrentTime();
      }
    }, 1000); 
  };
  componentWillUnmount(){
    // clearInterval(intervalCurrentTime);
    console.log("clean intervalCurrentTime")
  }
  
  render = () => {
    const { id } = this.props;
    // console.log(this.state.currentTime)
    document.cookie ="Youtube Current Time="+ this.state.currentTime
    return (
      <div className="container" style={{ position:'relative'}}>
        <div id={`youtube-player-${id}`} style={{height: '650px', width: '100%'}} />
      </div>
    );
  };
}

export default YouTubeVideo;