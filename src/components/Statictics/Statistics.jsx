import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistical.module.css';

const Statistics = ({ label, stats = [] }) => {
  return (
    <section className={styles.statistics}>
      {stats.length > 0 ? (
        <>
          {label ? <h2 className={styles.title}>{label}</h2> : null}
          <ul className={styles.statList}>
            {stats.map(el => (
              <li
                key={el.id}
                className={styles.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={styles.label}>{el.label}</span>
                <span className={styles.percentage}>{el.percentage}%</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.paragraph}>No stats</p>
      )}
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;