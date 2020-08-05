import React from 'react'
import {  SERVERNAME } from "../../constants/const";
import VideoPlayer from "./VideoJS";
import YouTubeVideo from "./YoutubePlayer";
import Iframe from 'react-iframe'

const Player = (({ src, serverName }) => {
    switch (serverName) {
        case SERVERNAME.GGDRIVE:
            return <VideoPlayer src={src} />;
        case SERVERNAME.LOTUS:
            return <VideoPlayer src={src} />;
        case SERVERNAME.PHIMMOI:
            return <Iframe url={src[0]}
                width="100%"
                height="650px"
                id="LyQuangMinh"
                className="myClassname"
                display="initial"
                position="relative"
                allow="fullscreen" />
        case SERVERNAME.YOUTUBE:
            console.log('helo')
            return <YouTubeVideo id={src[0]} />
        default: 
            return null;
    }
},[])

export default Player;
