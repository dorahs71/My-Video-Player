import { VideoContainer, Video } from './style';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoSource } from '../../utils/firebase';
import Controls from './Controls';
import { SuccessWindow, ConfirmWindow } from './AlertWindow';
import Loading from '../Common/Loading';
import {
  togglePlay,
  playByRecord,
  handleWatchRecord,
  handleBarWidth,
  handleShowDuration,
  handleVideoEndChangeToPlay,
  handleShowControl,
  countNum,
} from '../../utils/function';

export default function VideoPlayer() {
  const { id } = useParams();
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const controlsRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [videoSrc, setVideoSrc] = useState(0);
  const [durationMinutes, setDurationMinutes] = useState('0');
  const [durationSeconds, setDurationSeconds] = useState('0');
  const [currentTime, setCurrentTime] = useState(0);
  const [updateBookmark, setUpdateBookmark] = useState(false);
  const [addBookmarkAlert, setAddBookmarkAlert] = useState(false);
  const [removeBookmarkAlert, setRemoveBookmarkAlert] = useState(false);
  const [removeData, setRemoveData] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (videoRef.current !== null && !videoRef.current.pause) {
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

  const handleTimeUpdate = () => {
    handleBarWidth(videoRef, setBarWidth);
    handleShowDuration(videoRef, setDurationMinutes, setDurationSeconds);
    handleVideoEndChangeToPlay(videoRef, setIsPlay);
    handleWatchRecord(videoRef, id, currentTime, setCurrentTime);
    countNum(count, controlsRef, setCount);
  };

  return videoSrc ? (
    <VideoContainer
      ref={videoContainerRef}
      onMouseMove={() => handleShowControl(controlsRef, setCount)}
    >
      <Video
        src={videoSrc.trailer}
        type="video/mp4"
        preload="auto"
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onClick={() => togglePlay(isPlay, setIsPlay, videoRef)}
        autoPlay
      />
      <Controls
        id={id}
        videoRef={videoRef}
        ref={controlsRef}
        barWidth={barWidth}
        setBarWidth={setBarWidth}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        trailerName={videoSrc.chTitle}
        videoContainerRef={videoContainerRef}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
        updateBookmark={updateBookmark}
        setUpdateBookmark={setUpdateBookmark}
        setAddBookmarkAlert={setAddBookmarkAlert}
        setRemoveBookmarkAlert={setRemoveBookmarkAlert}
        removeData={removeData}
        setRemoveData={setRemoveData}
      />
      <SuccessWindow
        trigger={addBookmarkAlert}
        setTrigger={setAddBookmarkAlert}
        id={id}
        videoRef={videoRef}
        currentTime={currentTime}
        setUpdateBookmark={setUpdateBookmark}
      />
      <ConfirmWindow
        trigger={removeBookmarkAlert}
        setTrigger={setRemoveBookmarkAlert}
        setUpdateBookmark={setUpdateBookmark}
        removeData={removeData}
      />
    </VideoContainer>
  ) : (
    <Loading />
  );
}
