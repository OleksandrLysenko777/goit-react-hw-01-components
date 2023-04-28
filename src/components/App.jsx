import React from 'react';
import Profile from './Profile/Profile';
import user from './data/user.json';
import Statistics from '../components/Statictics/Statistics';
import statisticalData from './data/data.json';
import FriendList from '../components/FriendsList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from '../components/Transaction/TransactionHistory';
import transactions from './data/transactions.json';

const App = () => (
  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
