import styled from "styled-components";

export const CardsContainer = styled.div`
  margin: 0 auto;
  padding: 30px 0;
  text-align: center;
`;
export const LinkContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0;

  h1 {
    text-align: center;
    margin: 50px 0;
    font-size: 19px;
    font-weight: 300;
    color: #333;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 25px;
  margin: 0 auto;
  padding: 25px;
`;

export const Card = styled.div`
  max-width: 282px;
  width: 100%;
  margin: 0 auto;
`;
export const CardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
export const CardText = styled.div`
  padding: 10px 0 0 0;
  font-size: 15px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
