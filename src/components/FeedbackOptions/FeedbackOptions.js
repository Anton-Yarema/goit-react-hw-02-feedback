import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnBlock}>
      {options.map(option => (
        <button
          className={css.btnBlockItem}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
options: PropTypes.arrayOf(PropTypes.string.isRequired),
onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

    