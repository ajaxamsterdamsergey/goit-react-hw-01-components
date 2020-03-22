import React from "react";
import Description from "./Description";
import Stats from "./Stats";
import user from "../Profile/user.json";
import styles from "./Profile.module.css";
const Profile = () => (
  <div className={styles.profile}>
    <Description {...user} />
    <Stats {...user.stats} />
  </div>
);
export default Profile;
