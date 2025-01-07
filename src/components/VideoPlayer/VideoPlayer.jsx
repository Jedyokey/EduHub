import React, { useRef, useEffect } from 'react';
import "./VideoPlayer.css";
import video from "../../assets/uni-students.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoRef = useRef(null);
  const player = useRef(null);

  useEffect(() => {
    if (playState) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [playState]);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} muted controls />
    </div>
  );
};

export default VideoPlayer;