import { VideoContainer, Video, GetBack, BackArrow, BackLink } from './style';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoSource } from '../../utils/firebase';
import Controls from './Controls';
import {
  togglePlay,
  playByRecord,
  handleWatchRecord,
} from '../../utils/function';

export default function VideoPlayer() {
  const { id } = useParams();
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [videoSrc, setVideoSrc] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState('0');
  const [durationSeconds, setDurationSeconds] = useState('0');
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (videoRef !== null && !videoRef.current.pause) {
      setIsPlay(false);
    }
  }, [isPlay]);

  useEffect(() => {
    let isMounted = true;
    getVideoSource(id).then((doc) => {
      const data = doc.data();
      if (isMounted) {
        setVideoSrc(data);
        playByRecord(id, videoRef);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleBarWidth = () => {
    if (videoRef.current !== null) {
      let nowMoment = Math.floor(
        (videoRef.current.currentTime / videoRef.current.duration) * 1000
      );
      if (!isNaN(nowMoment)) {
        setBarWidth(nowMoment);
      }
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

      if (!isNaN(minutes) && !isNaN(seconds)) {
        setDurationMinutes(minutes);
        setDurationSeconds(seconds);
      }
    }
  };

  // const handleWatchRecord = () => {
  //   if (videoRef.current !== null) {
  //     setCurrentTime(videoRef.current.currentTime);
  //     const watchRecord = JSON.parse(localStorage.getItem('duration')) || [];
  //     let newRecord = { id: id, duration: currentTime };
  //     const index = watchRecord.findIndex((obj) => obj.id === newRecord.id);
  //     if (index === -1) {
  //       watchRecord.push(newRecord);
  //     } else {
  //       watchRecord[index].duration = newRecord.duration;
  //     }
  //     localStorage.setItem('duration', JSON.stringify(watchRecord));
  //   }
  // };

  const handleVideoEndChangeToPlay = () => {
    if (videoRef.current.ended) {
      setIsPlay(true);
    }
  };

  const handleTimeUpdate = () => {
    handleBarWidth();
    handleShowDuration();
    handleVideoEndChangeToPlay();
    handleWatchRecord(videoRef, id, currentTime, setCurrentTime);
  };

  return (
    <VideoContainer ref={videoContainerRef}>
      <Video
        src={videoSrc.trailer}
        type="video/mp4"
        preload="metadata"
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onClick={() => togglePlay(isPlay, setIsPlay, videoRef)}
        autoPlay
      />
      <BackLink to="/">
        <GetBack>
          <BackArrow />
        </GetBack>
      </BackLink>
      <Controls
        id={id}
        videoRef={videoRef}
        barWidth={barWidth}
        setBarWidth={setBarWidth}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        videoContainerRef={videoContainerRef}
        trailerName={videoSrc.chTitle}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
      />
    </VideoContainer>
  );
}
