import {
  EpisodesContainer,
  ButtonDiv,
  EpisodeIcon,
  EpisodesBoard,
  EpisodeLink,
  EpisodeBlock,
  EpisodeImage,
  PlayEpisode,
  PlayIcon,
  EpisodeContent,
  EpisodeName,
  EpisodeIntro,
} from './style';
import useTrailerData from '../../hooks/useTrailerData';
import { useState } from 'react';

export default function Episodes({ setShowBar }) {
  const trailerData = useTrailerData();

  return (
    <EpisodesContainer
      onMouseEnter={() => setShowBar('hidden')}
      onMouseLeave={() => setShowBar('visible')}
    >
      <ButtonDiv>
        <EpisodeIcon />
      </ButtonDiv>
      <EpisodesBoard>
        {trailerData.map((trailer) => (
          <EpisodeBlock key={trailer.id}>
            <EpisodeLink to={`/trailer/${trailer.id}`}>
              <EpisodeImage poster={trailer.poster}>
                <PlayEpisode>
                  <PlayIcon />
                </PlayEpisode>
              </EpisodeImage>
            </EpisodeLink>
            <EpisodeContent>
              <EpisodeName>{trailer.chTitle}</EpisodeName>
              <EpisodeIntro>{trailer.intro}</EpisodeIntro>
            </EpisodeContent>
          </EpisodeBlock>
        ))}
      </EpisodesBoard>
    </EpisodesContainer>
  );
}
