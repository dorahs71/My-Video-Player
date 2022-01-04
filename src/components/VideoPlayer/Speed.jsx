import {
  SpeedContainer,
  ButtonDiv,
  SpeedIcon,
  SpeedBoard,
  SpeedBar,
  SpeedNum,
} from './style';
import { useState } from 'react';

export default function Speed({ videoRef }) {
  const [value, setValue] = useState(1);

  const handleSpeedValue = (e) => {
    setValue(e.target.value);
    videoRef.current.playbackRate = value;
  };

  return (
    <SpeedContainer>
      <ButtonDiv>
        <SpeedIcon />
      </ButtonDiv>
      <SpeedBoard>
        <SpeedBar
          type="range"
          min="0.25"
          max="2"
          step="0.05"
          value={value}
          onChange={(e) => handleSpeedValue(e)}
        />
        <SpeedNum> {value} x</SpeedNum>
      </SpeedBoard>
    </SpeedContainer>
  );
}
