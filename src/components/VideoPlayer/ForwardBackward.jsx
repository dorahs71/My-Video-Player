import { ButtonContainer, ButtonDiv, Forward, Backward } from './style';
import React from 'react';
import { handleForBackward } from '../../utils/function';

export default React.memo(function ForwardBackward({ setBarWidth, videoRef }) {
  return (
    <ButtonContainer>
      <ButtonDiv onClick={() => handleForBackward(videoRef, setBarWidth, -10)}>
        <Backward />
      </ButtonDiv>
      <ButtonDiv onClick={() => handleForBackward(videoRef, setBarWidth, 10)}>
        <Forward />
      </ButtonDiv>
    </ButtonContainer>
  );
});
