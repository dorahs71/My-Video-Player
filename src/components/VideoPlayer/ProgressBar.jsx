import {
  ProgressDiv,
  BarContainer,
  BarInput,
  WatchedBar,
  VideoDuration,
} from './style';
import { useRef } from 'react';
import { handleSlideBar } from '../../utils/function';

export default function ProgressBar({
  barWidth,
  setBarWidth,
  videoRef,
  durationMinutes,
  durationSeconds,
  showBar,
}) {
  const barRef = useRef();

  return (
    <ProgressDiv showBar={showBar}>
      <BarContainer>
        <BarInput
          ref={barRef}
          value={barWidth}
          type="range"
          min="0"
          max="1000"
          step="0.01"
          onChange={(e) => handleSlideBar(e, setBarWidth, videoRef)}
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
