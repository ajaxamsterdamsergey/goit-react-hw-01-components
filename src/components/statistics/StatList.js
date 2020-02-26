import React from "react";
import styles from "./StatList.module.css";
import PropTypes from "prop-types";
const StatList = ({ items = [] }) => (
  <ul className={styles.statList}>
    {items.map(item => (
      <li className={styles.item} key={item.id}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}%</span>
      </li>
    ))}
  </ul>
);
StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  ).isRequired
};
export default StatList;
