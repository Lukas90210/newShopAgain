import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-image: url("https://source.unsplash.com/random/2560x1440");
  background-size: cover;
  background-position: center center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;

    p {
      font-size: 38px;
      font-weight: 300;
      color: #fff;
      cursor: default;

      @media (max-width: 768px) {
          font-size: 35px;
      }
    }

    h2 {
      color: #fff;
      font-weight: 400;
      margin-bottom: 25px;
      cursor: default;

       @media (max-width: 768px) {
          font-size: 22px;
      }
    }
`;
