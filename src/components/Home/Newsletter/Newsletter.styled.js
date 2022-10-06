import styled from "styled-components";

export const Container = styled.div`
  background-image: url("https://source.unsplash.com/random/2560x1441");
  background-size: cover;
  background-position: center center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
  margin: 0 auto;
  color: #fff;
  padding: 100px 0;

  @media (max-width: 768px) {
    width: 60%;
  }
  h4 {
    font-weight: 400;
    margin-bottom: 20px;
    font-size: 18px;
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  h3 {
    font-weight: 400;
    margin-bottom: 30px;
    text-align: center;
    font-size: 20px;
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  p {
    font-weight: 100;
    font-size: 15px;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
export const Form = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    font-size: 15px;
    padding: 13px 14px;
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    outline: none;
    &::placeholder {
      color: #fff;
    }

    @media (max-width: 768px) {
      font-size: 13px;
      padding: 11px 12px;
    }
  }

  Button {
    font-size: 15px;
    margin-left: 10px;
    padding: 7px 10px;
    &:hover {
      color: #fff;
    }
    @media (max-width: 768px) {
      font-size: 13px;
    }
  }
`;
