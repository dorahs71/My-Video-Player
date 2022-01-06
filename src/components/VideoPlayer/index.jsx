import {
  VideoContainer,
  Video,
  GetBack,
  BackArrow,
  BackLink,
  AddBookmark,
  AddBookmarkIcon,
  TrailerName,
} from './style';
import { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoSource } from '../../utils/firebase';
import Controls from './Controls';
import { SuccessWindow, ConfirmWindow } from './AlertWindow';
import {
  togglePlay,
  playByRecord,
  handleWatchRecord,
  handleBarWidth,
  handleShowDuration,
  handleVideoEndChangeToPlay,
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
  const [updateBookmark, setUpdateBookmark] = useState(false);
  const [addBookmarkAlert, setAddBookmarkAlert] = useState(false);
  const [removeBookmarkAlert, setRemoveBookmarkAlert] = useState(false);
  const [removeData, setRemoveData] = useState('');

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

  const handleTimeUpdate = () => {
    handleBarWidth(videoRef, setBarWidth);
    handleShowDuration(videoRef, setDurationMinutes, setDurationSeconds);
    handleVideoEndChangeToPlay(videoRef, setIsPlay);
    handleWatchRecord(videoRef, id, currentTime, setCurrentTime);
  };

  const showAddBookmarkAlert = () => {
    setAddBookmarkAlert(true);
    setUpdateBookmark(true);
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
        <TrailerName>{videoSrc.chTitle}</TrailerName>
      </BackLink>
      <AddBookmark onClick={showAddBookmarkAlert}>
        <AddBookmarkIcon />
      </AddBookmark>
      <Controls
        id={id}
        videoRef={videoRef}
        barWidth={barWidth}
        setBarWidth={setBarWidth}
        isPlay={isPlay}
        setIsPlay={setIsPlay}
        videoContainerRef={videoContainerRef}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
        updateBookmark={updateBookmark}
        setUpdateBookmark={setUpdateBookmark}
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
  );
}
