import { useState } from 'react';

import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { FeedbackStyle, StatTitle } from './app.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  function total(good, neutral, bad) {
    return good + neutral + bad;
  }

  return (
    <FeedbackStyle>
      <FeedbackOptions onLeaveFeedback={onBtnClick} />

      <StatTitle>Statistic</StatTitle>
      {total ? (
        <Statistics
          total={total(good, neutral, bad)}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      ) : (
        <Notification />
      )}
    </FeedbackStyle>
  );
}
