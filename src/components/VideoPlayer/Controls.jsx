import { ControlContainer } from './style';
import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';

export default function Controls({
  videoRef,
  barWidth,
  togglePlay,
  isPlay,
  durationMinutes,
  durationSeconds,
}) {
  return (
    <ControlContainer>
      <ProgressBar
        barWidth={barWidth}
        videoRef={videoRef}
        durationMinutes={durationMinutes}
        durationSeconds={durationSeconds}
      />
      <PlayPause togglePlay={togglePlay} isPlay={isPlay} />
      <Volume videoRef={videoRef} />
    </ControlContainer>
  );
}
