import {
  ControlsWrapper,
  ControlContainer,
  GetBack,
  BackArrow,
  BackLink,
  AddBookmark,
  AddBookmarkIcon,
  TrailerName,
} from './style';
import { useState, forwardRef } from 'react';
import ProgressBar from './ProgressBar';
import LeftButtons from './LeftButtons';
import RightButtons from './RightButtons';

export default forwardRef(function Controls(
  {
    id,
    videoRef,
    barWidth,
    setBarWidth,
    setIsPlay,
    isPlay,
    trailerName,
    durationMinutes,
    durationSeconds,
    videoContainerRef,
    updateBookmark,
    setUpdateBookmark,
    setAddBookmarkAlert,
    setRemoveBookmarkAlert,
    removeData,
    setRemoveData,
  },
  ref
) {
  const [showBar, setShowBar] = useState('visible');

  const showAddBookmarkAlert = () => {
    setAddBookmarkAlert(true);
    setUpdateBookmark(true);
  };

  return (
    <ControlsWrapper ref={ref}>
      <BackLink to="/">
        <GetBack>
          <BackArrow />
        </GetBack>
      </BackLink>
      <TrailerName>{trailerName}</TrailerName>
      <AddBookmark onClick={showAddBookmarkAlert}>
        <AddBookmarkIcon />
      </AddBookmark>
      <ControlContainer>
        <ProgressBar
          barWidth={barWidth}
          setBarWidth={setBarWidth}
          videoRef={videoRef}
          durationMinutes={durationMinutes}
          durationSeconds={durationSeconds}
          showBar={showBar}
        />
        <LeftButtons
          setIsPlay={setIsPlay}
          isPlay={isPlay}
          barWidth={barWidth}
          setBarWidth={setBarWidth}
          videoRef={videoRef}
        />
        <RightButtons
          id={id}
          videoRef={videoRef}
          videoContainerRef={videoContainerRef}
          setShowBar={setShowBar}
          updateBookmark={updateBookmark}
          setUpdateBookmark={setUpdateBookmark}
          setRemoveBookmarkAlert={setRemoveBookmarkAlert}
          removeData={removeData}
          setRemoveData={setRemoveData}
        />
      </ControlContainer>
    </ControlsWrapper>
  );
});
