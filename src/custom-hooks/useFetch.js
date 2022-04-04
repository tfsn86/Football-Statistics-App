import { useState, useEffect } from 'react';
import sortAndSetTop20ShotsOnGoal from '../utils';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const APIFetchDetails = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
  },
  redirect: 'follow',
};

const url = 'https://v3.football.api-sports.io/';

// Queries are setup for the 2021/2022 Premier League season. When a new season starts the year number in the query has to be updated
const leagueStandingsQuery = 'standings?season=2021&league=39';
const topScorersQuery = 'players/topscorers?season=2021&league=39';
const topAssistsQuery = 'players/topassists?season=2021&league=39';
const allPlayersQuery = 'players?season=2021&league=39';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [shotsOnGoalData, setShotsOnGoalData] = useState([]);

  const getData = () => {
    setLoading(true);

    const leagueStandingAPICall = fetch(
      `${url}${leagueStandingsQuery}`,
      APIFetchDetails
    );
    const topScorerAPICall = fetch(`${url}${topScorersQuery}`, APIFetchDetails);
    const topAssistAPICall = fetch(`${url}${topAssistsQuery}`, APIFetchDetails);

    Promise.all([leagueStandingAPICall, topScorerAPICall, topAssistAPICall])
      .then((values) => Promise.all(values.map((value) => value.json())))
      .then((finalVals) => {
        let leagueStandingsData = finalVals[0];
        let topScorersData = finalVals[1];
        let topAssistsData = finalVals[2];

        setData([leagueStandingsData, topScorersData, topAssistsData]);
      });

    setLoading(false);
  };

  let allPlayersDataArrayOfArrays = [];
  let allPlayersDataFlattenedArray = [];

  const getAllPlayersData = async (page = 1) => {
    const response = await fetch(
      `${url}${allPlayersQuery}&page=${page}`,
      APIFetchDetails
    );

    const responseJSON = await response.json();

    if (responseJSON.paging.current <= responseJSON.paging.total) {
      page = responseJSON.paging.current + 1;

      const playerDataArray = responseJSON.response.map((item) => {
        return {
          id: item.player.id,
          name: item.player.name,
          team: item.statistics[0].team.name,
          teamLogo: item.statistics[0].team.logo,
          shotsTotal: item.statistics[0].shots.total,
          shotsOnTarget: item.statistics[0].shots.on,
          shotsOnGoalAccuracyPct: parseInt(
            (
              (item.statistics[0].shots.on / item.statistics[0].shots.total) *
              100
            ).toFixed(0)
          ),
        };
      });

      allPlayersDataArrayOfArrays.push(playerDataArray);

      allPlayersDataFlattenedArray = [].concat(...allPlayersDataArrayOfArrays);

      getAllPlayersData(page);
    }

    setShotsOnGoalData(
      sortAndSetTop20ShotsOnGoal(allPlayersDataFlattenedArray)
    );
  };

  useEffect(() => {
    getData();
    getAllPlayersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data, shotsOnGoalData };
};
