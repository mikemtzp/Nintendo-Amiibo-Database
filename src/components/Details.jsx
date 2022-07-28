import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { amiibos } = useSelector((state) => state.amiibos);
  // const [details, setDetails] = useState({});
  const { id } = useParams();

  // const getDetails = async () => {
  //   const response = await fetch(`${apiUrl}/amiibo/?tail=${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   });
  //   const data = await response.json();
  //   setDetails(data.amiibo);
  // };

  // useEffect(() => {
  //   getDetails();
  // }, []);

  return (
    <section>
      <div>
        <img src={amiibos[id].image} alt={amiibos[id].name} />
        <ul>
          <li>{amiibos[id].series}</li>
          <li>{amiibos[id].character}</li>
          <li>{amiibos[id].game}</li>
          <li>{amiibos[id].name}</li>
          <li>{amiibos[id].type}</li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
