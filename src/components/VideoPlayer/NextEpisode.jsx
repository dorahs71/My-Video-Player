import { NextEpisodeContainer, ButtonDiv, NextIcon, NextTag } from './style';
import { useNavigate } from 'react-router-dom';

export default function NextEpisode({ id }) {
  const navigate = useNavigate();

  const handleGoNext = () => {
    const number = Number(id.slice(-1));
    navigate(`/trailer/matrix${number + 1}`);
  };

  return (
    id !== 'matrix4' && (
      <NextEpisodeContainer onClick={handleGoNext}>
        <ButtonDiv>
          <NextIcon />
        </ButtonDiv>
        <NextTag>下一集</NextTag>
      </NextEpisodeContainer>
    )
  );
}
