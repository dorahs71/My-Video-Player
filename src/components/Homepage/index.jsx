import {
  HomepageWrapper,
  BackgroundDiv,
  HomepageMainDiv,
  Title,
  Subtitle,
  CardWrapper,
} from './style';
import { useEffect, useState } from 'react';
import { getTrailerCardData } from '../../utils/firebase';
import TrailerCard from './TrailerCard';

export default function Homepage() {
  const [trailerData, setTrailerData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getTrailerCardData().then((collection) => {
      const data = collection.docs.map((doc) => {
        return doc.data();
      });
      if (isMounted) setTrailerData(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <HomepageWrapper>
      <HomepageMainDiv>
        <Title>駭 客 任 務</Title>
        <Subtitle>預告片回顧</Subtitle>
        <CardWrapper>
          {trailerData.map((data) => (
            <TrailerCard key={data.id} data={data} />
          ))}
        </CardWrapper>
      </HomepageMainDiv>
      <BackgroundDiv />
    </HomepageWrapper>
  );
}
