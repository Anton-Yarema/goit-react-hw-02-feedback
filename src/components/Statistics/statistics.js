import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <h2 className={css.title}>Statistics</h2>
    <p className={css.statisticsItem}>Good: {good} </p>
    <p className={css.statisticsItem}>Neutral: {neutral}</p>
    <p className={css.statisticsItem}>Bad: {bad}</p>
    <p className={css.statisticsItem}>Total: {total}</p>
    <p className={css.statisticsItem}>Positive feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
