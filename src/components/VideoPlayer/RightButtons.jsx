import { ButtonArea } from './style';
import FullScreen from './FullScreen';
import Speed from './Speed';
import Episodes from './Episodes';
import Bookmark from './Bookmark';
import NextEpisode from './NextEpisode';

export default function RightButtons({ videoRef, videoContainerRef }) {
  return (
    <ButtonArea>
      <NextEpisode />
      <Bookmark />
      <Episodes />
      <Speed videoRef={videoRef} />
      <FullScreen videoContainerRef={videoContainerRef} />
    </ButtonArea>
  );
}
