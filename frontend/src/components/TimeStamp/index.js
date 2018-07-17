import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const TimeStamp = (props) => (
    <span className={styles.time}>{props.date}</span>
)

TimeStamp.propTypes = {
    date: PropTypes.string.isRequired
}

export default TimeStamp;