export const togglePlay = (isPlay, setIsPlay, videoRef) => {
  if (isPlay) {
    videoRef.current.play();
    setIsPlay(false);
  } else {
    videoRef.current.pause();
    setIsPlay(true);
  }
};

export const playByRecord = (id, videoRef) => {
  const watchRecord = JSON.parse(localStorage.getItem('duration')) || [];
  if (videoRef.current !== null && watchRecord.length !== 0) {
    const index = watchRecord.findIndex((obj) => obj.id === id);
    videoRef.current.currentTime = watchRecord[index].duration;
  }
};

export const handleWatchRecord = (
  videoRef,
  id,
  currentTime,
  setCurrentTime
) => {
  if (videoRef.current !== null) {
    setCurrentTime(videoRef.current.currentTime);
    const watchRecord = JSON.parse(localStorage.getItem('duration')) || [];
    let newRecord = { id: id, duration: currentTime };
    const index = watchRecord.findIndex((obj) => obj.id === newRecord.id);
    if (index === -1) {
      watchRecord.push(newRecord);
    } else {
      watchRecord[index].duration = newRecord.duration;
    }
    localStorage.setItem('duration', JSON.stringify(watchRecord));
  }
};

export const handleBarWidth = (videoRef, setBarWidth) => {
  if (videoRef.current !== null) {
    let nowMoment = Math.floor(
      (videoRef.current.currentTime / videoRef.current.duration) * 1000
    );
    if (!isNaN(nowMoment)) {
      setBarWidth(nowMoment);
    }
  }
};

export const handleShowDuration = (
  videoRef,
  setDurationMinutes,
  setDurationSeconds
) => {
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

export const handleVideoEndChangeToPlay = (videoRef, setIsPlay) => {
  if (videoRef.current.ended) {
    setIsPlay(true);
  }
};

export const handleVolumeValue = (e, setValue, videoRef, value) => {
  setValue(e.target.value);
  videoRef.current.volume = value;
};

export const toggleMute = (value, setValue, videoRef) => {
  if (value <= 0) {
    setValue(0.5);
    videoRef.current.volume = 0.5;
  } else {
    setValue(0);
    videoRef.current.volume = 0;
  }
};

export const handleSpeedValue = (e, setValue, videoRef, value) => {
  setValue(e.target.value);
  if (videoRef !== null) {
    videoRef.current.playbackRate = value;
  }
};

export const handleSlideBar = (e, setBarWidth, videoRef) => {
  setBarWidth(e.target.value);
  if (videoRef !== null) {
    videoRef.current.currentTime =
      videoRef.current.duration * (e.target.value / 1000);
  }
};

export const handleForBackward = (videoRef, setBarWidth, seconds) => {
  const video = videoRef.current;
  setBarWidth((prev) => prev + (seconds / video.duration) * 1000);
  video.currentTime = video.currentTime + seconds;
};

export const handleGoNext = (id, navigate) => {
  const number = Number(id.slice(-1));
  navigate(`/trailer/matrix${number + 1}`);
};

export const toggleFullScreen = (isFull, setIsFull, videoContainerRef) => {
  if (isFull) {
    setIsFull(false);
    document.exitFullscreen();
  } else {
    setIsFull(true);
    videoContainerRef.current.requestFullscreen();
  }
};

export const getBookmarkData = (id, setShowBookmark) => {
  const bookmarkData = JSON.parse(localStorage.getItem('bookmark')) || [];
  const episodeBookmark = [];
  bookmarkData.forEach((obj) => {
    if (obj.id === id) {
      episodeBookmark.push(obj);
    }
  });
  setShowBookmark(episodeBookmark);
};

export const confirmAddBookmark = (
  videoRef,
  id,
  currentTime,
  setUpdateBookmark,
  setTrigger
) => {
  if (videoRef.current !== null) {
    const bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];
    let newBookmark = { id: id, time: currentTime.toFixed(2) };
    const index = bookmark.findIndex(
      (obj) => obj.id === newBookmark.id && obj.time === newBookmark.time
    );
    if (index === -1) {
      bookmark.push(newBookmark);
    } else {
      bookmark[index].time = newBookmark.time;
    }
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
    setUpdateBookmark(false);
    setTrigger(false);
  }
};

export const handlePlayBookmark = (videoRef, time) => {
  if (videoRef !== null) {
    videoRef.current.currentTime = time;
  }
};

export const confirmRemoveBookmark = (data, setUpdateBookmark, setTrigger) => {
  const bookmarkData = JSON.parse(localStorage.getItem('bookmark')) || [];
  let newData = bookmarkData.filter((obj) => obj.time !== data.time);
  localStorage.setItem('bookmark', JSON.stringify(newData));
  setUpdateBookmark(false);
  setTrigger(false);
};

export const handleShowControl = (controlsRef, setCount) => {
  controlsRef.current.style.display = 'block';
  setCount(0);
};

export const countNum = (count, controlsRef, setCount) => {
  if (count > 8) {
    controlsRef.current.style.display = 'none';
    setCount(0);
  }
  if (controlsRef.current.style.display === 'block') {
    let newCount = count + 1;
    setCount(newCount);
  }
};
