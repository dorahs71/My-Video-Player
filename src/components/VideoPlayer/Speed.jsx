import {
  ButtonContainer,
  ButtonDiv,
  SpeedBtn,
  SpeedBoard,
  SpeedBar,
  SpeedNum,
} from './style';
import { useState } from 'react';

export default function Speed({ videoRef }) {
  const [value, setValue] = useState(1);
  const [trigger, setTrigger] = useState(false);

  const handleSpeedValue = (e) => {
    setValue(e.target.value);
    videoRef.current.playbackRate = value;
  };

  const toggleSpeedBoard = () => {
    if (trigger) {
      setTrigger(false);
    } else {
      setTrigger(true);
    }
  };

  return (
    <>
      <ButtonContainer>
        <ButtonDiv onClick={toggleSpeedBoard}>
          <SpeedBtn />
        </ButtonDiv>
      </ButtonContainer>
      {trigger && (
        <SpeedBoard>
          <SpeedBar
            type="range"
            min="0.25"
            max="2"
            step="0.05"
            value={value}
            onChange={(e) => handleSpeedValue(e)}
          />
          <SpeedNum>{value === '1' ? 'Normal' : value + 'x'}</SpeedNum>
        </SpeedBoard>
      )}
    </>
  );
}
