import { ButtonContainer, ButtonDiv, Forward, Backward } from './style';

export default function ForwardBackward({ setBarWidth, videoRef }) {
  const handleBackward = () => {
    const video = videoRef.current;
    setBarWidth((prev) => prev - (10 / video.duration) * 1000);
    video.currentTime = video.currentTime - 10;
  };

  const handleForward = () => {
    const video = videoRef.current;
    setBarWidth((prev) => prev + (10 / video.duration) * 1000);
    video.currentTime = video.currentTime + 10;
  };

  return (
    <ButtonContainer>
      <ButtonDiv onClick={handleBackward}>
        <Backward />
      </ButtonDiv>
      <ButtonDiv onClick={handleForward}>
        <Forward />
      </ButtonDiv>
    </ButtonContainer>
  );
}
