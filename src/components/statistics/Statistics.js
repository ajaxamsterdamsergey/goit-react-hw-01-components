import React from "react";
import StatList from "./StatList";
import Data from "../statistics/statisticalData.json";
import styles from "./Statistic.module.css";
const Statistics = () => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
    <StatList items={Data} />
  </section>
);
export default Statistics;
