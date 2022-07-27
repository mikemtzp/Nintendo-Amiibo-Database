import React from 'react';
import { useSelector } from 'react-redux';
import Category from '../components/Amiibo';
import logo from '../assets/images/Amiibo_main.jpg';

const Home = () => {
  const { amiibos } = useSelector((state) => state.amiibos);
  const amiiboList = Object.keys(amiibos);

  return (
    <section>
      <div className="header">
        <img src={logo} alt="All amiibos" className="header-image" />
        <p className="header-text">
          Welcome! Select a category to filter with the searchbar
          above and see all the information available about any Amiibo!
        </p>
      </div>
      <ul>
        {
          amiiboList ? amiiboList.map((amiibo) => (
            <Category
              series={amiibos[amiibo].series}
              character={amiibos[amiibo].character}
              game={amiibos[amiibo].game}
              image={amiibos[amiibo].image}
              name={amiibos[amiibo].name}
              type={amiibos[amiibo].type}
              key={amiibo}
            />
          )) : <li>No categories available</li>
        }
      </ul>
    </section>
  );
};

export default Home;
