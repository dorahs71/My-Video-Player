import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
`;

export const ControlContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
`;

export const BarContainer = styled.div`
  position: absolute;
  height: 10px;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleY(0.6);
  :hover {
    cursor: pointer;
    transform: scaleY(1);
    background: rgba(255, 255, 255, 0.3);
  }
`;

export const CurrentTime = styled.div`
  height: 10px;
  background: orangered;
  width: ${(props) => props.barWidth}%;
`;

export const ButtonContainer = styled.div``;

export const ButtonDiv = styled.div`
  width: 50px;
  height: 50px;
  outline: 0;
  border-radius: 15px;
  background: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Play = styled(FaPlay)`
  transform: scale(2);
`;

export const Pause = styled(FaPause)`
  transform: scale(2);
`;
