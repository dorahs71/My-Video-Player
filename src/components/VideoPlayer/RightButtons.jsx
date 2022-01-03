import { ButtonArea } from './style';
import FullScreen from './FullScreen';

export default function RightButtons({ videoContainerRef }) {
  return (
    <ButtonArea>
      <FullScreen videoContainerRef={videoContainerRef} />
    </ButtonArea>
  );
}
