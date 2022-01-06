import {
  SpeedContainer,
  ButtonDiv,
  SpeedIcon,
  SpeedBoard,
  SpeedBar,
  SpeedNum,
} from './style';
import { useState } from 'react';
import { handleSpeedValue } from '../../utils/function';

export default function Speed({ videoRef, setShowBar }) {
  const [value, setValue] = useState(1);

  return (
    <SpeedContainer
      onMouseEnter={() => setShowBar('hidden')}
      onMouseLeave={() => setShowBar('visible')}
    >
      <ButtonDiv>
        <SpeedIcon />
      </ButtonDiv>
      <SpeedBoard>
        <SpeedNum> {value} x</SpeedNum>
        <SpeedBar
          type="range"
          min="0.2"
          max="2"
          step="0.1"
          value={value}
          onChange={(e) => handleSpeedValue(e, setValue, videoRef, value)}
        />
      </SpeedBoard>
    </SpeedContainer>
  );
}
