import { ControlContainer, TrailerName } from './style';
import ProgressBar from './ProgressBar';
import LeftButtons from './LeftButtons';
import RightButtons from './RightButtons';

export default function Controls({
  id,
  videoRef,
  barWidth,
  setBarWidth,
  togglePlay,
  isPlay,
  durationMinutes,
  durationSeconds,
  videoContainerRef,
  trailerName,
}) {
  return (
    <ControlContainer>
      <ProgressBar
        barWidth={barWidth}
        setBarWidth={setBarWidth}
        videoRef={videoRef}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
      />
      <LeftButtons
        togglePlay={togglePlay}
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
      />
    </ControlContainer>
  );
}
