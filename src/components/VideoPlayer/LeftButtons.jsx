import { ButtonArea } from './style';
import PlayPause from './PlayPause';
import ForwardBackward from './ForwardBackward';
import Volume from './Volume';

export default function LeftButtons({
  togglePlay,
  isPlay,
  barWidth,
  setBarWidth,
  videoRef,
}) {
  return (
    <ButtonArea>
      <PlayPause togglePlay={togglePlay} isPlay={isPlay} barWidth={barWidth} />
      <ForwardBackward setBarWidth={setBarWidth} videoRef={videoRef} />
      <Volume videoRef={videoRef} />
    </ButtonArea>
  );
}
