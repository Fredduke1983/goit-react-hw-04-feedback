import PropTypes from 'prop-types';
import {
  FeedbackBtns,
  FeedbackBtnsStyle,
  FeedbackBtnsTitle,
} from './feedbackBtns.styled';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <FeedbackBtnsTitle>Please leave feedback</FeedbackBtnsTitle>
      <FeedbackBtnsStyle>
        <FeedbackBtns name="good" onClick={onLeaveFeedback}>
          Good
        </FeedbackBtns>
        <FeedbackBtns name="neutral" onClick={onLeaveFeedback}>
          Neutral
        </FeedbackBtns>
        <FeedbackBtns name="bad" onClick={onLeaveFeedback}>
          Bad
        </FeedbackBtns>
      </FeedbackBtnsStyle>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
