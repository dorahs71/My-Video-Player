import { useEffect, useState } from 'react';
import { getTrailerCardData } from '../utils/firebase';

export default function useTrailerData() {
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
  return trailerData;
}
