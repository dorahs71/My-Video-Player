import {
  ProgressDiv,
  BarContainer,
  WatchedBar,
  PlayHead,
  VideoDuration,
} from './style';
import { useRef } from 'react';

export default function ProgressBar({
  barWidth,
  videoRef,
  durationMinutes,
  durationSeconds,
}) {
  const barRef = useRef();

  const handleClickTime = (e) => {
    const clickTime =
      (e.nativeEvent.offsetX / barRef.current.offsetWidth) *
      videoRef.current.duration;
    videoRef.current.currentTime = clickTime;
  };

  const handleSlideTime = (e) => {
    videoRef.current.currentTime = e.target.value;
  };

  return (
    <ProgressDiv>
      <BarContainer
        ref={barRef}
        onClick={(e) => handleClickTime(e)}
        value={barWidth}
        type="range"
        min="0"
        max="1000"
        step="1"
        onChange={(e) => handleSlideTime(e)}
      >
        {/* <WatchedBar barWidth={barWidth} /> */}
        {/* <PlayHead /> */}
      </BarContainer>
      <VideoDuration>
        {durationMinutes}:
        {durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}
      </VideoDuration>
    </ProgressDiv>
  );
}
