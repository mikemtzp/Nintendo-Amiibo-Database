import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Amiibo = (props) => {
  const { name, image, id } = props;

  return (
    <div className="amiibo" id={id}>
      <img src={image} alt={name} className="amiibo-image" />
      <h2 className="amiibo-name">{name}</h2>
      <Link to={`/details/${id}`}>
        <p className="amiibo-details" data-testid={id}>See details</p>
      </Link>
    </div>

  );
};

Amiibo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Amiibo;
