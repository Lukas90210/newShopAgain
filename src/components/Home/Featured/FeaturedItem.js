import { Link } from "react-router-dom";
import {
  FeaturedBox,
  Item,
  Image,
  Describe,
  FeaturedLink,
} from "./Featured.styled";

const FeaturedItem = () => (
  <FeaturedBox>
    <Item>
      <Image>
        <Link>
          <img
            alt="featured"
            src="https://source.unsplash.com/random/2560x1442"
          />
        </Link>
      </Image>
      <Describe>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
        <p>
          Hairstyle Rescue Instruction, Self-learn how to get yourself a haircut
          by your own It’s getting warm outside and you want a decent haircut,
          but the...
        </p>
        <FeaturedLink to="/Demo">Read more...</FeaturedLink>
      </Describe>
    </Item>

    <Item>
      <Image>
        <Link>
          <img
            alt="featured"
            src="https://source.unsplash.com/random/2560x1443"
          />
        </Link>
      </Image>
      <Describe>
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
        <p>
          Hairstyle Rescue Instruction, Self-learn how to get yourself a haircut
          by your own
        </p>
        <FeaturedLink>Read more...</FeaturedLink>
      </Describe>
    </Item>
  </FeaturedBox>
);

export default FeaturedItem;
