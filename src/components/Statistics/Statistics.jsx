import { StatStyle } from './statistics.styled';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  total: PropTypes.number,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
