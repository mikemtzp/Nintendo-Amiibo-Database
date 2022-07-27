import PropTypes from 'prop-types';

const Amiibo = (props) => {
  const { name, image } = props;

  return (
    <div className="amiibo">
      <img src={image} alt={name} className="amiibo-image" />
      <h2 className="amiibo-name">{name}</h2>
      <p className="amiibo-details">See details</p>
    </div>
  );
};

Amiibo.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Amiibo;
