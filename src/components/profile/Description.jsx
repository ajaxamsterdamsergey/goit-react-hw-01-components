import React from "react";
import PropTypes from "prop-types";
import styles from "./Description.module.css";

const Description = ({ name, tag, location, avatar }) => (
  <div>
    <div className={styles.description}>
      <img className={styles.avatar} src={avatar} alt="user avatar" />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  </div>
);
Description.protoType = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
};
export default Description;
