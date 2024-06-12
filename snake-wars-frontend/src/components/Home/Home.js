import React from 'react';
import PlayButton from './PlayButton';
import Options from './Options';
import Store from './Store';
import Leaderboard from './Leaderboard';

const Home = () => {
  return (
    <div className="home">
      <h1>Snake Wars</h1>
      <PlayButton />
      <Options />
      <Store />
      <Leaderboard />
    </div>
  );
};

export default Home;
