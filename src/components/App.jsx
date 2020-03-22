import React from "react";
import FriendList from "./FriendList/FriendList";
import friendJson from "./FriendList/friends.json";
import Profile from "./Profile/Profile";
import userJson from "./Profile/user.json";
import Statistics from "./Statistics/Statistics";
import data from "./Statistics/statisticalData.json";
import TransactionHistory from "./TransactionHistory/TransactoinsHistory";
import transactions from "./TransactionHistory/transaction.json";

const App = () => (
  <div>
    <FriendList friends={friendJson} />
    <Profile user={userJson} />
    <Statistics stats={data} />
    <TransactionHistory items={transactions} />
  </div>
);
export default App;
