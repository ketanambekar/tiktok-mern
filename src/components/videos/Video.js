import React, { useRef, useState } from 'react';
import VideoFooter from '../videoFooter/VideoFooter';
import VideoSideBar from '../videoSideBar/VideoSideBar'
import './Video.css';

function Video({ channel, description, song, likes, share, messages, url }) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    }


    return (
        <div className="video">
            <video
            autoPlay 
            muted
                onClick={handleVideoPress}
                ref={videoRef}
                className="video__player"
                loop
                src={url} />
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSideBar likes={likes} shares={share} messages={messages} />
        </div>
    )
}

export default Video
