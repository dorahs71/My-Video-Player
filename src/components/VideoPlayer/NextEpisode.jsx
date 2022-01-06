import { NextEpisodeContainer, ButtonDiv, NextIcon, NextTag } from './style';
import { useNavigate } from 'react-router-dom';
import { handleGoNext } from '../../utils/function';

export default function NextEpisode({ id, setShowBar }) {
  const navigate = useNavigate();

  return (
    id !== 'matrix4' && (
      <NextEpisodeContainer
        onClick={() => handleGoNext(id, navigate)}
        onMouseEnter={() => setShowBar('hidden')}
        onMouseLeave={() => setShowBar('visible')}
      >
        <ButtonDiv>
          <NextIcon />
        </ButtonDiv>
        <NextTag>下一集</NextTag>
      </NextEpisodeContainer>
    )
  );
}
