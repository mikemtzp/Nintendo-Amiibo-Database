import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../assets/images/Amiibo_main.jpg';
import Amiibo from '../components/Amiibo';

const Home = () => {
  const { amiibos } = useSelector((state) => state.amiibos);
  const [amiibosFiltered, setAmiibosFiltered] = useState({});
  const [gameSeries, setGameSeries] = useState({});

  let seriesOptions = {};

  const filterAmiibos = (event) => {
    if (event.target.value !== 'all') {
      Object.keys(amiibos).forEach((element) => {
        if (amiibos[element].series === event.target.value) {
          seriesOptions[element] = amiibos[element];
        }
      });

      setAmiibosFiltered(seriesOptions);
    } else {
      setAmiibosFiltered(amiibos);
    }
  };

  const seriesSelector = () => {
    seriesOptions = {};

    Object.keys(amiibos).forEach((element) => {
      const tempData = amiibos[element].series;

      if (!seriesOptions[tempData]) {
        seriesOptions[tempData] = true;
      }
    });
    setGameSeries(seriesOptions);
  };

  useEffect(() => {
    seriesSelector();
  }, []);

  useEffect(() => {
    setAmiibosFiltered(amiibos);
  }, [amiibos]);

  return (
    <section>
      <div className="header">
        <img src={logo} alt="All amiibos" className="header-image" />
        <p className="header-text">
          Welcome! Select a category to filter with the searchbar
          above and see all the information available about any Amiibo!
        </p>
        <select className="header-filter" onChange={filterAmiibos}>
          <option value="all">All Game Series</option>
          {
            Object.keys(gameSeries).map((serie) => (
              <option value={serie} key={serie}>
                {serie}
              </option>
            ))
          }
        </select>
      </div>
      <ul className="header-amiibocontainer">
        {
          Object.keys(amiibosFiltered).map((amiibo) => (
            <Amiibo
              series={amiibos[amiibo].series}
              character={amiibos[amiibo].character}
              game={amiibos[amiibo].game}
              image={amiibos[amiibo].image}
              name={amiibos[amiibo].name}
              type={amiibos[amiibo].type}
              id={amiibos[amiibo].id}
              key={amiibo}
            />
          ))
        }
      </ul>
    </section>
  );
};

export default Home;
