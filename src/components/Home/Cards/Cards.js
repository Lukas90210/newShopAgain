import { cardsData } from "./data";
import CardsItem from "./CardsItem";
import {
  CardsContainer,
  Container,
  Content,
  LinkContainer,
} from "./Cards.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  background-color: #222;
  padding: 10px 14px;
  border: 1px solid transparent;
  &:hover {
    color: #333;
    background-color: #fff;
    border: 1px solid #222;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Cards = () => (
  <CardsContainer>
    <Container>
      <h1>OUR PRODUCTS</h1>
      <Content>
        {cardsData.map((item) => (
          <CardsItem key={item.describe} {...item} />
        ))}
      </Content>
    </Container>
    <LinkContainer>
      <StyledLink to="/Demo">See more</StyledLink>
    </LinkContainer>
  </CardsContainer>
);

export default Cards;
