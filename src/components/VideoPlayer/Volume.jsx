import { VolumeContainer, ButtonDiv, UnMute, Mute, VolumeBar } from './style';
import { useState } from 'react';

export default function Volume({ videoRef }) {
  const [value, setValue] = useState(0.5);

  const handleVolumeValue = (e) => {
    setValue(e.target.value);
    videoRef.current.volume = value;
  };

  const toggleMute = () => {
    if (value <= 0) {
      setValue(0.5);
      videoRef.current.volume = 0.5;
    } else {
      setValue(0);
      videoRef.current.volume = 0;
    }
  };

  return (
    <VolumeContainer>
      <ButtonDiv onClick={toggleMute}>
        {value <= 0 ? <Mute /> : <UnMute />}
      </ButtonDiv>
      <VolumeBar
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => handleVolumeValue(e)}
      />
    </VolumeContainer>
  );
}
