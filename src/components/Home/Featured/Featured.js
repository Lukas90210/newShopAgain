import { Container, Content } from "./Featured.styled";
import FeaturedItem from "./FeaturedItem";
import Button from "../../Button/ButtonPrimary";

const Featured = () => (
  <Container>
    <h3>FEATURED ARTICLE</h3>
    <Content>
      <FeaturedItem />
    </Content>
    <Button>View all articles</Button>
  </Container>
);

export default Featured;
