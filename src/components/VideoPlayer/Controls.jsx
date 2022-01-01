import { ControlContainer } from './style';
import ProgressBar from './ProgressBar';
import Buttons from './Buttons';

export default function Controls({ barWidth, togglePlay, isPlay }) {
  return (
    <ControlContainer>
      <ProgressBar barWidth={barWidth} />
      <Buttons togglePlay={togglePlay} isPlay={isPlay} />
    </ControlContainer>
  );
}
