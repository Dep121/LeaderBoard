import React, { useState, useEffect } from 'react';
import s from './App.module.scss';
import { Header, Layout, ListItem, Pagination, Overlay, AddTeamForm } from './component';
import { listTeams } from './services/API';

function App({ }) {

  const [teams, setTeams] = useState([]);
  const [openOverlay, setOpenOverlay] = useState(false);

  async function getList() {
    // let resp = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json').then(res => res.json());
    let resp = await listTeams();
    console.table(resp);
    setTeams(resp);
  }

  useEffect(() => {
    getList();
  }, []);

  const closeOverlay = () => {
    setOpenOverlay(false);
  }
  
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

  const listHeader = (
    <span className={s.listHeader}>
      <span>Team Board</span>
      <span>Wins</span>
      <span>Losses</span>
      <span>Ties</span>
      <span>Score</span>
    </span>
  );

  return (
    <>
      <div className={s.app}>
        <Layout>
          <Header>
            Leader Board
          </Header>

          <button onClick={()=>setOpenOverlay(!openOverlay)}>Add Team</button>
          
          <Pagination header={listHeader} list={list} itemsPerPage={15} />
          {
            openOverlay && <Overlay onClose={closeOverlay}>
              <AddTeamForm />
            </Overlay>
          }
        </Layout>
      </div>
    </>
  );
}

export default App;
