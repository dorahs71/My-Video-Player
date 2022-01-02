import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

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
  background: transparent;
  color: #fff;
  padding: 30px 0px 20px 0px;
`;

export const ProgressDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const PlayHead = styled.div`
  background: orangered;
  height: 0px;
  width: 0px;
  border-radius: 50%;
  transform: translateX(-5%);
`;

export const BarContainer = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5px;
  top: 0;
  left: 0;
  flex-grow: 1;
  background: rgba(255, 255, 255, 0.2);
  transform: scaleY(0.6);
  :hover {
    cursor: pointer;
    transform: scaleY(1);
    background: rgba(255, 255, 255, 0.3);
  }

  :hover ${PlayHead} {
    height: 20px;
    width: 20px;
  }
`;

export const VideoDuration = styled.div`
  color: white;
  padding: 10px;
`;

export const WatchedBar = styled.div`
  height: 100%;
  background: orangered;
  width: ${(props) => props.barWidth}%;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ButtonDiv = styled.div`
  width: 50px;
  height: 50px;
  outline: 0;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    transform: scale(1.3);
  }
  transition: all 0.3s;
`;

export const Play = styled(FaPlay)`
  transform: scale(1.5);
`;

export const Pause = styled(FaPause)`
  transform: scale(1.5);
`;

export const VolumeBar = styled.input`
  max-width: 0;
  overflow: hidden;
  cursor: pointer;
  transition: max-width 0.5s;
`;

export const VolumeContainer = styled.div`
  display: flex;
  :hover ${VolumeBar} {
    max-width: 100%;
  }
`;

export const UnMute = styled(HiVolumeUp)`
  transform: scale(1.8);
`;

export const Mute = styled(HiVolumeOff)`
  transform: scale(1.8);
`;
