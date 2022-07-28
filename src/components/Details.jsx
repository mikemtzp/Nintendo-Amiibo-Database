import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { amiibos } = useSelector((state) => state.amiibos);
  const { id } = useParams();

  return (
    <section className="details">
      <div className="details-container">
        <img src={amiibos[id].image} alt={amiibos[id].name} className="details-container__image" />
        <ul className="details-container__ul">
          <li>Game series:</li>
          <li>{amiibos[id].series}</li>
          <li>Character:</li>
          <li>{amiibos[id].character}</li>
          <li>Game:</li>
          <li>{amiibos[id].game}</li>
          <li>Name:</li>
          <li>{amiibos[id].name}</li>
          <li>Type:</li>
          <li>{amiibos[id].type}</li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
