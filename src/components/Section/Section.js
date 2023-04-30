import React from 'react';
import css from './section.module.css'

const Section = ({ title, children }) => (
  <div>
    <h2 className={css.visuallyHidden}>{title}</h2>
    {children}
  </div>
);

export default Section;
