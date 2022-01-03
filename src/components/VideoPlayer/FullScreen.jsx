import { ButtonContainer, ButtonDiv, Full, ExitFull } from './style';
import { useState } from 'react';

export default function FullScreen({ videoContainerRef }) {
  const [isFull, setIsFull] = useState(false);

  const toggleFullScreen = () => {
    if (isFull) {
      setIsFull(false);
      document.exitFullscreen();
    } else {
      setIsFull(true);
      videoContainerRef.current.requestFullscreen();
    }
  };

  return (
    <ButtonContainer>
      <ButtonDiv onClick={toggleFullScreen}>
        {isFull ? <ExitFull /> : <Full />}
      </ButtonDiv>
    </ButtonContainer>
  );
}
