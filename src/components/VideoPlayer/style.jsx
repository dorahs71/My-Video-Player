import styled from 'styled-components';
import { FaPlay, FaPause } from 'react-icons/fa';

import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

import { MdOutlineForward10, MdReplay10 } from 'react-icons/md';

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

export const BarInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  outline: none;
  border-radius: 3px;
  height: 100%;
  position: absolute;
  cursor: pointer;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 25px;
    height: 25px;
    transform: translateX(-3%);
    background: orangered;
    outline: 0;
    border-radius: 50%;
    position: relative;
    visibility: hidden;
  }
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 7px;
  flex-grow: 1;
  transform: scaleY(0.6);
  opacity: 0.6;
  transition: opacity 0.3s;
  position: relative;
  cursor: pointer;
  :hover {
    transform: scaleY(1);
    opacity: 0.8;
  }
  :hover ::-webkit-slider-thumb {
    visibility: visible;
  }
`;

export const WatchedBar = styled.div`
  background: orangered;
  height: 100%;
  border-radius: 3px;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.barWidth / 10}%;
`;

export const VideoDuration = styled.div`
  color: white;
  padding: 10px;
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

export const Forward = styled(MdOutlineForward10)`
  transform: scale(1.8);
`;

export const Backward = styled(MdReplay10)`
  transform: scale(1.8);
`;
