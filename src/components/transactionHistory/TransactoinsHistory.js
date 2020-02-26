import React from "react";
import transactions from "../transactionHistory/transaction.json";
import TableRow from "./TableRow";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => (
  <table className={styles.transactionHistory}>
    <thead className={styles.head}>
      <tr className={styles.row}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <TableRow items={transactions} />
    </tbody>
  </table>
);

export default TransactionHistory;
