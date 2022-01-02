import { VideoContainer, Video } from './style';
import { useRef, useState, useEffect } from 'react';
import video1_480p from '../../video/matrix1_480p.mp4';
import Controls from './Controls';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState(2);
  const [durationSeconds, setDurationSeconds] = useState(51);

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
      let nowMoment =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setBarWidth(nowMoment);
    }
  };

  const handleVideoDuration = () => {
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

  const handleVideoProgress = () => {
    handleBarWidth();
    handleVideoDuration();
  };

  return (
    <VideoContainer>
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
        togglePlay={togglePlay}
        isPlay={isPlay}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
      />
    </VideoContainer>
  );
}
