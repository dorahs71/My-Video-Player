import { VolumeContainer, ButtonDiv, UnMute, Mute, VolumeBar } from './style';
import React, { useState } from 'react';
import { handleVolumeValue, toggleMute } from '../../utils/function';

export default React.memo(function Volume({ videoRef }) {
  const [value, setValue] = useState(0.5);

  return (
    <VolumeContainer>
      <ButtonDiv onClick={() => toggleMute(value, setValue, videoRef)}>
        {value <= 0 ? <Mute /> : <UnMute />}
      </ButtonDiv>
      <VolumeBar
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={value}
        onChange={(e) => handleVolumeValue(e, setValue, videoRef, value)}
      />
    </VolumeContainer>
  );
});
