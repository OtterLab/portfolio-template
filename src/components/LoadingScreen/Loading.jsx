import React from 'react';
import classes from './LoadingStyles.module.css';

function Loading() {
  return (
    <div className={classes.loadingContainer}>
        <div className={classes.tripleSpinner}></div>
        <h3>Loading</h3>
    </div>
  )
}

export default Loading;