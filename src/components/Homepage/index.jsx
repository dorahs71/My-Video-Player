import {
  HomepageWrapper,
  BackgroundDiv,
  HomepageMainDiv,
  Title,
  Subtitle,
  CardWrapper,
} from './style';
import useTrailerData from '../../hooks/useTrailerData';
import TrailerCard from './TrailerCard';
import Loading from '../Common/Loading';

export default function Homepage() {
  const trailerData = useTrailerData();

  return trailerData.length !== 0 ? (
    <HomepageWrapper>
      <HomepageMainDiv>
        <Title>駭 客 任 務</Title>
        <Subtitle>經典回顧</Subtitle>

        <CardWrapper>
          {trailerData.map((trailer) => (
            <TrailerCard key={trailer.id} trailer={trailer} />
          ))}
        </CardWrapper>
      </HomepageMainDiv>
      <BackgroundDiv />
    </HomepageWrapper>
  ) : (
    <Loading />
  );
}
