import { VideoContainer, Video } from './style';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoSource } from '../../utils/firebase';
import Controls from './Controls';

export default function VideoPlayer() {
  const { id } = useParams();
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [videoSrc, setVideoSrc] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState('0');
  const [durationSeconds, setDurationSeconds] = useState('0');

  useEffect(() => {
    if (videoRef !== null && !videoRef.current.paused) {
      setIsPlay(false);
    }
  }, [isPlay]);

  useEffect(() => {
    let isMounted = true;
    getVideoSource(id).then((doc) => {
      const data = doc.data();
      if (isMounted) setVideoSrc(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

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
        src={videoSrc.trailer}
        type="video/mp4"
        preload="metadata"
        ref={videoRef}
        onTimeUpdate={handleVideoProgress}
        onClick={togglePlay}
        autoPlay
      />
      <Controls
        videoRef={videoRef}
        barWidth={barWidth}
        setBarWidth={setBarWidth}
        togglePlay={togglePlay}
        isPlay={isPlay}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
        videoContainerRef={videoContainerRef}
        trailerName={videoSrc.chTitle}
      />
    </VideoContainer>
  );
}
