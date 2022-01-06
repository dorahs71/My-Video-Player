import { ControlContainer, TrailerName } from './style';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import LeftButtons from './LeftButtons';
import RightButtons from './RightButtons';

export default function Controls({
  id,
  videoRef,
  barWidth,
  setBarWidth,
  setIsPlay,
  isPlay,
  durationMinutes,
  durationSeconds,
  videoContainerRef,
  trailerName,
}) {
  const [showBar, setShowBar] = useState('visible');

  return (
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
      <TrailerName>{trailerName}</TrailerName>
      <RightButtons
        id={id}
        videoRef={videoRef}
        videoContainerRef={videoContainerRef}
        setShowBar={setShowBar}
      />
    </ControlContainer>
  );
}
