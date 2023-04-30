import React from 'react';
import Profile from './Profile/Profile';
import user from './data/user.json';
import Statistics from '../components/Statictics/Statistics';
import statisticalData from './data/data.json';
import FriendList from '../components/FriendsList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from '../components/Transaction/TransactionHistory';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics label="Upload Stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
