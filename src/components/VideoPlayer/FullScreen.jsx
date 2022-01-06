import { ButtonContainer, ButtonDiv, Full, ExitFull } from './style';
import { toggleFullScreen } from '../../utils/function';
import { useState } from 'react';

export default function FullScreen({ videoContainerRef }) {
  const [isFull, setIsFull] = useState(false);

  return (
    <ButtonContainer>
      <ButtonDiv
        onClick={() => toggleFullScreen(isFull, setIsFull, videoContainerRef)}
      >
        {isFull ? <ExitFull /> : <Full />}
      </ButtonDiv>
    </ButtonContainer>
  );
}
