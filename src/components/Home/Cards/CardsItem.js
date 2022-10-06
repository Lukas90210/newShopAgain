import { Link } from "react-router-dom";
import { Card, CardImage, CardText } from "./Cards.styled";
import PropTypes from "prop-types";

const Cards = ({ image, describe, price }) => (
  <Card>
    <CardImage>
      <Link to="/Demo">
        <img alt="text" src={image} />
      </Link>
    </CardImage>
    <CardText>
      <p>{describe}</p>
      <p>{price}</p>
    </CardText>
  </Card>
);

Cards.propTypes = {
  image: PropTypes.string.isRequired,
  describe: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
Cards.defaultProps = {
  describe: "some describe",
};

export default Cards;
