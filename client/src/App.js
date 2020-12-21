import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, Layout, ListItem, Pagination } from './component';

function App({ }) {

  const [teams, setTeams] = useState([]);

  async function getList() {
    let resp = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json').then(res => res.json());
    setTeams(resp);
  }

  useEffect(() => {
    getList();
  }, []);
  
  const list = teams.map(ele => {
    const { team_name, wins, losses, score, ties } = ele;
    return (
      <ListItem
        leftText={team_name}
        content1={{ text: '', value: wins }}
        content2={{ text: '', value: losses }}
        content3={{ text: '', value: ties }}
        rightText={score}
      />)
  });

  return (
    <>
      <Layout>
        <Header>
          Leader Board
        </Header>
        <Pagination list={list} itemsPerPage={15} />
      </Layout>
    </>
  );
}

export default App;
