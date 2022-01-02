import { ControlContainer } from './style';
import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';
import ForwardBackward from './ForwardBackward';

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
      <ForwardBackward setBarWidth={setBarWidth} videoRef={videoRef} />
      <Volume videoRef={videoRef} />
    </ControlContainer>
  );
}
