import { ButtonContainer, ButtonDiv, Pause, Play } from './style';
import { togglePlay } from '../../utils/function';

import React from 'react';
export default React.memo(function PlayPause({ isPlay, setIsPlay, videoRef }) {
  return (
    <ButtonContainer>
      <ButtonDiv onClick={() => togglePlay(isPlay, setIsPlay, videoRef)}>
        {isPlay ? <Play /> : <Pause />}
      </ButtonDiv>
    </ButtonContainer>
  );
});
