import { ButtonArea } from './style';
import PlayPause from './PlayPause';
import ForwardBackward from './ForwardBackward';
import Volume from './Volume';

export default function LeftButtons({
  setIsPlay,
  isPlay,
  setBarWidth,
  videoRef,
}) {
  return (
    <ButtonArea>
      <PlayPause setIsPlay={setIsPlay} isPlay={isPlay} videoRef={videoRef} />
      <ForwardBackward setBarWidth={setBarWidth} videoRef={videoRef} />
      <Volume videoRef={videoRef} />
    </ButtonArea>
  );
}
