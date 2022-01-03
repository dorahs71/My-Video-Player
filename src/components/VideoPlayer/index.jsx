import { VideoContainer, Video } from './style';
import { useRef, useState, useEffect } from 'react';
import video1_480p from '../../video/matrix1_480p.mp4';
import Controls from './Controls';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(2);
  const [durationSeconds, setDurationSeconds] = useState(30);

  useEffect(() => {
    if (videoRef !== null && videoRef.current.paused) {
      setIsPlay(true);
    }
  }, [isPlay]);

  const togglePlay = () => {
    if (isPlay) {
      videoRef.current.play();
      setIsPlay(false);
    } else {
      videoRef.current.pause();
      setIsPlay(true);
    }
  };

  const handleBarWidth = () => {
    if (videoRef.current !== null) {
      let nowMoment = Math.floor(
        (videoRef.current.currentTime / videoRef.current.duration) * 1000
      );
      setBarWidth(nowMoment);
    }
  };

  const handleShowDuration = () => {
    if (videoRef.current !== null) {
      let minutes = Math.floor(
        (videoRef.current.duration - videoRef.current.currentTime) / 60
      );
      let seconds = Math.floor(
        videoRef.current.duration - videoRef.current.currentTime - minutes * 60
      );
      setDurationMinutes(minutes);
      setDurationSeconds(seconds);
    }
  };

  const handleVideoEndChangeToPlay = () => {
    if (videoRef.current.ended) {
      setIsPlay(true);
    }
  };

  const handleVideoProgress = () => {
    handleBarWidth();
    handleShowDuration();
    handleVideoEndChangeToPlay();
  };

  return (
    <VideoContainer ref={videoContainerRef}>
      <Video
        preload="metadata"
        ref={videoRef}
        onTimeUpdate={handleVideoProgress}
        onClick={togglePlay}
      >
        <source src={video1_480p} type="video/mp4" />
      </Video>
      <Controls
        videoRef={videoRef}
        barWidth={barWidth}
        setBarWidth={setBarWidth}
        togglePlay={togglePlay}
        isPlay={isPlay}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
        videoContainerRef={videoContainerRef}
      />
    </VideoContainer>
  );
}
