import { StatStyle } from './statistics.styled';

export function Statistics({ total, good, neutral, bad }) {
  function countPositiveFeedbackPercentage(good, total) {
    if (!total) {
      return 0;
    }
    return ((good / total) * 100).toFixed(0);
  }

  return (
    <StatStyle>
      <p>Good: {good}</p>

      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {countPositiveFeedbackPercentage(good, total)}%
      </p>
    </StatStyle>
  );
}
