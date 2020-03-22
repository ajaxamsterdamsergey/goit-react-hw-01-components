import React from "react";
import styles from "./Items.module.css";
import PropTypes from "prop-types";
const Item = ({ items = [] }) => (
  <ul className={styles.item}>
    {items.map(item => (
      <li className={styles.listItem} key={item.id}>
        <span className={item.isOnline ? styles.isActive : styles.status}>
          {item.isOnline}
        </span>
        <img
          className={styles.avatar}
          src={item.avatar}
          alt={item.name}
          width="48"
        />
        <p className={styles.name}>{item.name}</p>
      </li>
    ))}
  </ul>
);
Item.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};
export default Item;
