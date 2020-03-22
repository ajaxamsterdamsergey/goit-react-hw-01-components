import React from "react";
import styles from "./TableRow.module.css";
import PropTypes from "prop-types";

const TableRow = ({ items = [] }) =>
  items.map(item => (
    <tr key={item.id}>
      <td className={styles.data}>{item.type}</td>
      <td className={styles.data}>{item.amount}</td>
      <td className={styles.data}>{item.currency}</td>
    </tr>
  ));

TableRow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TableRow;
