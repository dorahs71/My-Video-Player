import { ControlContainer } from './style';
import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';

export default function Controls({
  videoRef,
  barWidth,
  setBarWidth,
  togglePlay,
  isPlay,
  durationMinutes,
  durationSeconds,
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
      <PlayPause togglePlay={togglePlay} isPlay={isPlay} barWidth={barWidth} />
      <Volume videoRef={videoRef} />
    </ControlContainer>
  );
}
