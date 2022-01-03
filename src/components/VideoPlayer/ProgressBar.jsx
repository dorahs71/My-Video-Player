import {
  ProgressDiv,
  BarContainer,
  BarInput,
  WatchedBar,
  VideoDuration,
} from './style';
import { useRef } from 'react';

export default function ProgressBar({
  barWidth,
  setBarWidth,
  videoRef,
  durationMinutes,
  durationSeconds,
}) {
  const barRef = useRef();

  const handleSlideBar = (e) => {
    setBarWidth(e.target.value);
    videoRef.current.currentTime =
      videoRef.current.duration * (e.target.value / 1000);
  };

  return (
    <ProgressDiv>
      <BarContainer>
        <BarInput
          ref={barRef}
          value={barWidth}
          type="range"
          min="0"
          max="1000"
          step="0.01"
          onChange={(e) => handleSlideBar(e)}
        />
        <WatchedBar barWidth={barWidth} />
      </BarContainer>

      <VideoDuration>
        {'0' + durationMinutes}:
        {durationSeconds < 10 ? '0' + durationSeconds : durationSeconds}
      </VideoDuration>
    </ProgressDiv>
  );
}
