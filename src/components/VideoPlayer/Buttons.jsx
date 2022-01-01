import { ButtonContainer, ButtonDiv, Pause, Play } from './style';

export default function Buttons({ togglePlay, isPlay }) {
  return (
    <ButtonContainer>
      <ButtonDiv onClick={togglePlay}>
        {isPlay ? <Play /> : <Pause />}
      </ButtonDiv>
    </ButtonContainer>
  );
}
