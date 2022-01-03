import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomepageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const BackgroundDiv = styled.div`
  background: url('https://i.pinimg.com/originals/82/ab/dc/82abdc6c0818f80ada086fb1b912a62e.jpg')
    no-repeat center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.2;
  position: fixed;
  background-size: cover;
  z-index: -1;
`;

export const HomepageMainDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 56px;
  font-weight: bold;
  padding: 10px;
  margin-top: 30px;
  text-shadow: 0 0 7px #e5e5e5, 0 0 10px #e5e5e5, 0 0 21px #e5e5e5,
    0 0 32px #0fa, 0 0 52px #0fa, 0 0 72px #0fa, 0 0 82px #0fa, 0 0 111px #0fa;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #e5e5e5;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const VideoBox = styled.div`
  width: 260px;
  height: 155px;
  transition: 0.1s linear;
`;

export const Video = styled.video`
  object-fit: contain;
  width: 260px;
  height: 155px;
  border-radius: 5px;
  display: none;
  transition: 0.1s linear;
`;

export const Poster = styled.img`
  object-fit: cover;
  width: 260px;
  height: 155px;
  border-radius: 5px;
`;

export const ContentDiv = styled.div`
  text-align: center;
  margin-top: 0px;
  transition: 0.1s linear;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 230px;
  background: #fff;
  color: #000;
  border-radius: 10px;
  margin: 20px 50px;
  padding: 20px 15px;
  cursor: pointer;
  box-shadow: rgba(59, 66, 60, 0.5) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(59, 66, 60, 0.5) 0px -2px 6px 0px inset;
  transition: 0.1s linear;
  :hover {
    height: 260px;
  }
  :hover ${VideoBox} {
    transform: scale(1.4);
  }
  :hover ${Video} {
    display: block;
  }
  :hover ${Poster} {
    display: none;
  }

  :hover ${ContentDiv} {
    margin-top: 30px;
  }
`;

export const CardSquare = styled.div`
  width: 400px;
  height: 280px;
`;

export const ChTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const EnTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #6a6a6a;
`;

export const ReleaseYear = styled.span`
  font-size: 16px;
  font-weight: normal;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
