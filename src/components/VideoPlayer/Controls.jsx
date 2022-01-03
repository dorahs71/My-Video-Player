import { ControlContainer } from './style';
import ProgressBar from './ProgressBar';
import LeftButtons from './LeftButtons';
import RightButtons from './RightButtons';

export default function Controls({
  videoRef,
  barWidth,
  setBarWidth,
  togglePlay,
  isPlay,
  durationMinutes,
  durationSeconds,
  videoContainerRef,
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
      <RightButtons videoRef={videoRef} videoContainerRef={videoContainerRef} />
    </ControlContainer>
  );
}
