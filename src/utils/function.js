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
  const index = watchRecord.findIndex((obj) => obj.id === id);
  videoRef.current.currentTime = watchRecord[index].duration;
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
