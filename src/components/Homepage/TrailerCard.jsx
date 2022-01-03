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

export default function TrailerCard({ data }) {
  return (
    <CardSquare>
      <CardLink to={`/trailer/${data.id}`} key={data.id}>
        <CardContainer>
          <VideoBox>
            <Video
              src={data.trailer}
              type="video/mp4"
              autoPlay
              muted
              loop
              preload="metadata"
            />

            <Poster src={data.poster} alt="matrix trailer" />
          </VideoBox>
          <ContentDiv>
            <ChTitle>
              {data.chTitle}
              <ReleaseYear> ({data.year})</ReleaseYear>
            </ChTitle>

            <EnTitle>{data.enTitle}</EnTitle>
          </ContentDiv>
        </CardContainer>
      </CardLink>
    </CardSquare>
  );
}
