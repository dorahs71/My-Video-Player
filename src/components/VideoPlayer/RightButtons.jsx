import { ButtonArea } from './style';
import FullScreen from './FullScreen';
import Speed from './Speed';
import Episodes from './Episodes';
import Bookmark from './Bookmark';
import NextEpisode from './NextEpisode';

export default function RightButtons({ id, videoRef, videoContainerRef }) {
  return (
    <ButtonArea>
      <NextEpisode id={id} />
      <Bookmark />
      <Episodes />
      <Speed videoRef={videoRef} />
      <FullScreen videoContainerRef={videoContainerRef} />
    </ButtonArea>
  );
}
