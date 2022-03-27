import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;

const APIFetchDetails = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': API_KEY,
  },
  redirect: 'follow',
};

// Queries are setup for the 2021/2022 Premier League season. When a new season starts the year number in the query has to be updated
const leagueStandingsQuery = 'standings?season=2021&league=39';
const topScorersQuery = 'players/topscorers?season=2021&league=39';
const topAssistsQuery = 'players/topassists?season=2021&league=39';
const allPlayersQuery = 'players?season=2021&league=39';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [allPlayersData, setAllPlayersData] = useState();

  const getData = () => {
    setLoading(true);

    const leagueStandingAPICall = fetch(
      `https://v3.football.api-sports.io/${leagueStandingsQuery}`,
      APIFetchDetails
    );

    const topScorerAPICall = fetch(
      `https://v3.football.api-sports.io/${topScorersQuery}`,
      APIFetchDetails
    );

    const topAssistAPICall = fetch(
      `https://v3.football.api-sports.io/${topAssistsQuery}`,
      APIFetchDetails
    );

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

  let allPlayersDataArray = [];

  const getAllPlayersData = async (page = 1) => {
    const response = await fetch(
      `https://v3.football.api-sports.io/${allPlayersQuery}&page=${page}`,
      APIFetchDetails
    );

    const responseJSON = await response.json();

    if (responseJSON.paging.current <= responseJSON.paging.total) {
      page = responseJSON.paging.current + 1;

      allPlayersDataArray.push(responseJSON);
      getAllPlayersData(page);
    }

    setAllPlayersData(allPlayersDataArray);
  };

  useEffect(() => {
    getData();
    getAllPlayersData();
  }, []);

  return { loading, data, allPlayersData };
};
