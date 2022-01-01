import { VideoContainer, Video } from './style';
import { useRef, useState, useEffect } from 'react';
import video1_480p from '../../video/matrix1_480p.mp4';
import Controls from './Controls';

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [barWidth, setbarWidth] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

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
      setbarWidth(nowMoment);
    }
  };

  return (
    <VideoContainer>
      <Video
        preload="metadata"
        ref={videoRef}
        onTimeUpdate={handleBarWidth}
        onClick={togglePlay}
      >
        <source src={video1_480p} type="video/mp4" />
      </Video>
      <Controls barWidth={barWidth} togglePlay={togglePlay} isPlay={isPlay} />
    </VideoContainer>
  );
}
