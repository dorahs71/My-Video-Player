import { BarContainer, CurrentTime } from './style';

export default function ProgressBar({ barWidth }) {
  return (
    <BarContainer>
      <CurrentTime barWidth={barWidth} />
    </BarContainer>
  );
}
