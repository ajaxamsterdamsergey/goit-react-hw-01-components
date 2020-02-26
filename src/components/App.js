import React from "react";
import FriendList from "./friendList/FriendList";
import friendJson from "./friendList/friends.json";
import Profile from "./profile/Profile";
import userJson from "./profile/user.json";
import Statistics from "./statistics/Statistics";
import data from "./statistics/statisticalData.json";
import TransactionHistory from "./transactionHistory/TransactoinsHistory";
import transactions from "./transactionHistory/transaction.json";

const App = () => (
  <div>
    <FriendList friends={friendJson} />
    <Profile user={userJson} />
    <Statistics stats={data} />
    <TransactionHistory items={transactions} />
  </div>
);
export default App;
