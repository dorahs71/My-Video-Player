import {
  SpeedContainer,
  ButtonDiv,
  SpeedIcon,
  SpeedBoard,
  SpeedBar,
  SpeedNum,
} from './style';
import { useState } from 'react';

export default function Speed({ videoRef, setShowBar }) {
  const [value, setValue] = useState(1);

  const handleSpeedValue = (e) => {
    setValue(e.target.value);
    videoRef.current.playbackRate = value;
  };

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
          onChange={(e) => handleSpeedValue(e)}
        />
      </SpeedBoard>
    </SpeedContainer>
  );
}
