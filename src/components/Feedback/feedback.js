import React from 'react';
import Statistics from 'components/Statistics/';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';
import css from './feedback.module.css'

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(
      prevState => ({
        [option]: prevState[option] + 1,
      }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <h1 className={css.title}>Please leave feedback</h1>
        <Section title="FeedbackOptions">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;

