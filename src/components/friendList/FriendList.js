import React from "react";
import Item from "./Items";
import friendJson from "../friendList/friends.json";
import styles from "./FriendList.module.css";
const FriendList = () => (
  <div className={styles.friendList}>
    <Item items={friendJson} />
  </div>
);
export default FriendList;
