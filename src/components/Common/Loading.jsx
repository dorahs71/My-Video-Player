import load from '../../images/load.gif';
import { LoadingDiv, LoadImg } from './style';

export default function Loading() {
  return (
    <LoadingDiv>
      <LoadImg src={load} alt="dora video player" />
    </LoadingDiv>
  );
}
