import {
  CardLink,
  CardSquare,
  CardContainer,
  VideoBox,
  Video,
  Poster,
  ContentDiv,
  ChTitle,
  EnTitle,
  ReleaseYear,
} from './style';

export default function TrailerCard({ trailer }) {
  return (
    <CardSquare>
      <CardLink to={`/trailer/${trailer.id}`}>
        <CardContainer>
          <VideoBox>
            <Video
              src={trailer.trailer}
              type="video/mp4"
              autoPlay
              muted
              loop
              preload="metadata"
            />

            <Poster src={trailer.poster} alt="matrix trailer" />
          </VideoBox>
          <ContentDiv>
            <ChTitle>
              {trailer.chTitle}
              <ReleaseYear> ({trailer.year})</ReleaseYear>
            </ChTitle>

            <EnTitle>{trailer.enTitle}</EnTitle>
          </ContentDiv>
        </CardContainer>
      </CardLink>
    </CardSquare>
  );
}
