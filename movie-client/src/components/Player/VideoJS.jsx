// import React, { useEffect, useRef, useState } from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import '../../assets/css/video.css';

// export default function VideoPlayer({ src }) {
//   require('silvermine-videojs-quality-selector')(videojs);

//   const videoPlayerRef = useRef(null);
//   const [currentTime, setCurrentTime] = useState(null);
//   const options = {
//     autoplay: false,
//     controls: true,
//     userActions: { hotkeys: true },
//     playbackRates: [0.5, 1, 1.5, 2],
//     fluid:true
//   };

//   videojs.getComponent('ControlBar').prototype.options_ = {
//     loadEvent: 'play',
//     children: [
//       'playToggle',
//       'volumePanel',
//       'currentTimeDisplay',
//       'timeDivider',
//       'durationDisplay',
//       'progressControl',
//       'liveDisplay',
//       'seekToLive',
//       'remainingTimeDisplay',
//       'customControlSpacer',
//       'playbackRateMenuButton',
//       'chaptersButton',
//       'descriptionsButton',
//       'subsCapsButton',
//       'audioTrackButton',
//       'fullscreenToggle'
//     ]
//   }

//   useEffect(() => {
//     if (videoPlayerRef) {

//       const player = videojs(videoPlayerRef.current, options, () => {

//         player.controlBar.removeChild('fullscreenToggle');
//         player.controlBar.addChild('QualitySelector');
//         player.controlBar.addChild('fullscreenToggle');
//         // player.buffered(3)
//         player.src([{
//           src: src[0],
//           label: '360p',
//           type: 'video/mp4',
//           selected: true,
//         },
//         {
//           src: src[1],
//           type: 'video/mp4',
//           label: '480p',

//         },
//         ]);

//         //store current time when video is played 
//         player.on("timeupdate", () => {
//           setCurrentTime(player.currentTime());
//         });
//         player.buffered(30);
//         //start video at a given time
//         // player.currentTime(30);

//       }); 
//       player.responsive(true);
//     }

//     return () => {
//      };
//   }, [src]);

//   document.cookie = "time=" + currentTime;
//   // console.log(currentTime);
//   return (
//     <React.Fragment>
//       <video  ref={videoPlayerRef} className="video-js" />
//     </React.Fragment>
//   );
// };

import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "video.js/dist/video-js.min.css";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
import "videojs-contrib-ads/dist/videojs.ads.css";
import "../../assets/css/custom.css";
import videojs from "video.js";
require("videojs-youtube/dist/Youtube");
require("videojs-contrib-ads/dist/videojs.ads.min.js");
require("@silvermine/videojs-quality-selector")(videojs);

const options = {
  // fill: true,
  // fluid: true,
  preload: "auto",
  html5: {
    hls: {
      enableLowInitialPlaylist: true,
      smoothQualityChange: true,
      overrideNative: true,
    },
  },
  width: 640,
  height: 480,
  techOrder: ["youtube", "html5"],
  controlBar: {
    children: [
      "playToggle",
      "volumePanel",
      "currentTimeDisplay",
      "progressControl",
      "DurationDisplay",
      "playbackRateMenuButton",
      "qualitySelector",
      "fullscreenToggle",
    ],
  },
  playbackRates: [0.5, 1, 1.5, 2],
};

const usePlayer = ({ src, controls, autoplay }) => {

  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, {
      ...options,
      controls,
      autoplay,
      sources: src,
    });
    /**
     * Add handle event
     **/
    vjsPlayer.on("timeupdate", function () {
        setCurrentTime(vjsPlayer.currentTime());
    });
    handleAds(vjsPlayer);
    vjsPlayer.on("adtimeupdate", function () {
      var player = this;
      // console.log(player.ads.skipLinearAdMode());
    });
    setPlayer(vjsPlayer);
    // vjsPlayer.buffered(30)
    return () => vjsPlayer.dispose();
    // return () => {
    //   if (player !== null) {
    //     player.dispose();
    //   }
    // };
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src(src);
    }

  }, [src]);

  function handleAds(player) {
    player.ads({
      timeout: 5000,
    }); // initialize videojs-contrib-ads
    // request ads whenever there's new video content
    player.on("contentchanged", function () {
      // in a real plugin, you might fetch new ad inventory here
      player.trigger("adsready");
    });

    player.on("readyforpreroll", function () {
      player.ads.startLinearAdMode();
      // play your linear ad content
      player.src({
        src: "http://techslides.com/demos/sample-videos/small.webm",
        type: "video/webm",
      });

      // send event when ad is playing to remove loading spinner
      player.one("adplaying", function () {
        player.trigger("ads-ad-started");
      });

      // resume content when all your linear ads have finished
      player.one("adended", function () {
        player.ads.endLinearAdMode();
      });
    });

    // in a real plugin, you might fetch ad inventory here
    player.trigger("adsready");
  }

  //set currentTime to localStorage
  let d = new Date();
  d.setTime(d.getTime()+( 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "Play time=" + currentTime + "; expires=" + expires;

  localStorage.setItem("playtime",currentTime);
  
  return videoRef;
};

const VideoPlayer = ({ src, controls, autoplay }) => {
  const playerRef = usePlayer({ src, controls, autoplay });
  return (
    <div data-vjs-player>
      <video ref={playerRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.array,
  controls: PropTypes.bool,
  autoplay: PropTypes.bool,
};

VideoPlayer.defaultProps = {
  controls: true,
  autoplay: false,
};

export default VideoPlayer;