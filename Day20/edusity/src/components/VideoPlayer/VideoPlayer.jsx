// import React, { useRef } from 'react'
import './VideoPlayer.css'

// import video_1 from '../../assets/video-1.mp4'
import video from '../../assets/video.mp4'
import { useRef } from 'react';
const VideoPlayer = ({ playState, setPlayState }) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);
        }
    }
    return (
        <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
            {/* <iframe width={700} height={700} src="https://www.youtube-nocookie.com/embed/jvwHIRscAHg?si=NqXk0QLhxdd0nTd1&amp;controls=0" title="YouTube video player" allow=" autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer