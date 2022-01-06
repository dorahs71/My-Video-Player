import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FaPlay,
  FaPause,
  FaClone,
  FaStepForward,
  FaPlayCircle,
} from 'react-icons/fa';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import {
  MdOutlineForward10,
  MdReplay10,
  MdSpeed,
  MdBookmarkAdd,
  MdDelete,
} from 'react-icons/md';
import {
  RiFullscreenFill,
  RiFullscreenExitFill,
  RiArrowGoBackFill,
} from 'react-icons/ri';
import { BsBookmarkStarFill } from 'react-icons/bs';

export const VideoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
  ::-webkit-media-controls {
    display: none !important;
  }
`;

export const ControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  color: #fff;
  padding: 0px 10px 10px 10px;
`;

export const ButtonArea = styled.div`
  display: flex;
`;

export const RightButtonArea = styled(ButtonArea)`
  margin-right: 20px;
`;

export const ProgressDiv = styled.div`
  display: flex;
  margin-bottom: 6px;
  visibility: ${(props) => props.showBar};
  width: 100%;
  height: 12px;
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
  padding: 5px;
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
  transform: translate(20%, 20%);
  justify-content: center;
  align-items: center;
  transform-origin: top left;
  transition: all 0.3s;
  :hover {
    transform: scale(1.2) translate(10%, 10%);
  }
`;

export const TrailerName = styled.div`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 38px;
  left: 100px;
  color: #fff;
`;

export const Play = styled(FaPlay)`
  transform: scale(1.5);
`;

export const Pause = styled(FaPause)`
  transform: scale(1.5);
`;

export const VolumeBar = styled.input`
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  margin-top: 20px;
  cursor: pointer;
  transition: opacity 0.5s;
  transform: scale(0.8);
`;

export const VolumeContainer = styled.div`
  display: flex;
  margin-left: 5px;
  align-items: center;
  :hover ${VolumeBar} {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const UnMute = styled(HiVolumeUp)`
  transform: scale(1.8);
`;

export const Mute = styled(HiVolumeOff)`
  transform: scale(1.8);
`;

export const Forward = styled(MdOutlineForward10)`
  transform: scale(2);
`;

export const Backward = styled(MdReplay10)`
  transform: scale(2);
`;

export const Full = styled(RiFullscreenFill)`
  transform: scale(1.7);
`;

export const ExitFull = styled(RiFullscreenExitFill)`
  transform: scale(1.7);
`;

export const SpeedIcon = styled(MdSpeed)`
  transform: scale(2);
`;

export const SpeedBoard = styled.div`
  position: absolute;
  z-index: 3;
  padding: 20px;
  color: #fff;
  background: rgba(45, 45, 45, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  bottom: 130px;
  right: -95px;
  transition: opacity 0.5s;
  transform: rotate(90deg);
`;

export const SpeedContainer = styled(ButtonContainer)`
  width: 55px;
  height: 55px;
  position: relative;
  :hover ${SpeedBoard} {
    visibility: visible;
    opacity: 1;
  }
`;

export const SpeedBar = styled.input`
  display: block;
  cursor: pointer;
  transform: rotate(180deg);
`;

export const SpeedNum = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  width: 50px;
  transform: rotate(-90deg);
`;

export const EpisodeIcon = styled(FaClone)`
  transform: rotate(180deg) scale(1.5);
`;

export const NextIcon = styled(FaStepForward)`
  transform: scale(1.6);
`;

export const BookmarkIcon = styled(BsBookmarkStarFill)`
  transform: scale(1.5);
`;

export const NextTag = styled(SpeedBoard)`
  transform: rotate(0);
  padding: 10px;
  bottom: 50px;
  width: 80px;
  right: -20px;
`;

export const NextEpisodeContainer = styled(ButtonContainer)`
  width: 55px;
  height: 55px;
  position: relative;
  :hover ${NextTag} {
    opacity: 1;
    visibility: visible;
  }
`;

export const EpisodesBoard = styled(SpeedBoard)`
  transform: rotate(0);
  padding: 5px;
  overflow: scroll;
  flex-wrap: wrap;
  max-height: 350px;
  bottom: 50px;
  right: -95px;
`;

export const EpisodesContainer = styled(ButtonContainer)`
  width: 55px;
  height: 55px;
  position: relative;
  :hover ${EpisodesBoard} {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const EpisodeLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const EpisodeIntro = styled.div`
  display: none;
`;

export const EpisodeBlock = styled.div`
  width: 525px;
  height: 130px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :hover ${EpisodeIntro} {
    display: block;
  }
`;

export const PlayEpisode = styled.div`
  visibility: hidden;
  transform: translate(20%, 20%);
  opacity: 0;
  transition: all 0.5s;
`;

export const EpisodeImage = styled.div`
  position: relative;
  width: 180px;
  height: 120px;
  background: url(${(props) => props.poster}) center no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover ${PlayEpisode} {
    opacity: 1;
    visibility: visible;
  }
`;

export const PlayIcon = styled(FaPlayCircle)`
  transform: scale(3);
`;

export const EpisodeContent = styled.div`
  width: 300px;
`;

export const EpisodeName = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const GetBack = styled.div`
  position: absolute;
  left: 40px;
  top: 50px;
  cursor: pointer;
  color: #fff;
  transition: all.5s;
  :hover {
    transform: scale(1.2);
  }
`;

export const BackArrow = styled(RiArrowGoBackFill)`
  transform: scale(2.3);
`;

export const AddBookmark = styled(GetBack)`
  left: auto;
  right: 35px;
`;

export const AddBookmarkIcon = styled(MdBookmarkAdd)`
  transform: scale(2.3);
`;
export const BookmarkBoard = styled.div`
  width: 170px;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  color: #fff;
  background: rgba(45, 45, 45, 0.8);
  border-radius: 5px;
  display: flex;
  overflow-x: hidden;
  overflow: scroll;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-height: 145px;
  bottom: 50px;
  right: -60px;
  transition: opacity 0.5s;
`;

export const BookmarkContainer = styled(ButtonContainer)`
  width: 55px;
  height: 55px;
  position: relative;
  :hover ${BookmarkBoard} {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const BookmarkBlock = styled.div`
  width: 160px;
  height: 50px;
  border-radius: 5px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background: #4a4a4a;
  }
`;

export const NoBookmarkBlock = styled.div`
  width: 100px;
  height: 50px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayBookmark = styled.div`
  width: 50px;
  height: 60px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all.5s;
  :hover {
    color: #fdd500;
    transform: scale(1.2);
  }
`;

export const PlayBookmarkIcon = styled(FaPlayCircle)`
  transform: scale(1.8);
`;

export const BookmarkTime = styled.div`
  width: 100%;
  text-align: center;
`;

export const RemoveDiv = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;
  border-radius: 50%;
  width: 40px;
  height: 30px;
  transition: all 0.5s;
  :hover {
    background: #fff;
    color: #6b0015;
  }
`;

export const RemoveIcon = styled(MdDelete)`
  transform: scale(1.5);
`;

export const AlertWindow = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  padding: 25px;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  box-shadow: rgb(0, 0, 0) 0px 20px 30px -10px;
  color: #fff;
  margin: 0 auto;
  background: rgba(194, 210, 198, 0.8);
`;

export const AlertImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const AlertWord = styled.div`
  font-size: 20px;
  color: #444;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div`
  margin-top: 10px;
  width: 80px;
  padding: 6px;
  border-radius: 10px;
  font-size: 16px;
  background: #949a92;
  box-shadow: rgba(20, 20, 20, 0.3) 0px 1px 2px 0px,
    rgba(20, 20, 20, 0.15) 0px 1px 3px 1px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #b8bbb6;
    color: #444;
  }
`;
