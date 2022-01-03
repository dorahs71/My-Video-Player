import { ButtonArea } from './style';
import FullScreen from './FullScreen';
import Speed from './Speed';

export default function RightButtons({ videoRef, videoContainerRef }) {
  return (
    <ButtonArea>
      <Speed videoRef={videoRef} />
      <FullScreen videoContainerRef={videoContainerRef} />
    </ButtonArea>
  );
}
