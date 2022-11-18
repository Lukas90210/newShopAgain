import styled from "styled-components";

export const ListWrapper = styled.div`
  border-top: 0.5px solid #000;
  padding: 40px 90px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  grid-gap: 40px;
  color: #666;

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;

    padding: 30px 35px;
    grid-gap: 0;
  }
  p {
    font-size: 13px;
  }
  ul {
    list-style: none;
    margin-top: 30px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    align-items: start;
    p {
      line-height: 2;
      text-align: left;
    }
    li {
      margin: 15px 0;
      @media (max-width: 968px) {
        margin: 0;
      }
    }
  }
  Button {
    background-color: #222;
    color: #fff;
    font-size: 13px;
    padding: 12px 15px;
    margin-top: 17px;
    border: 1px solid transparent;
    &:hover {
      background-color: #fff;
      border: 1px solid #666;
      color: #333;
    }
  }
`;
export const ListItem = styled.div`
  margin: 0 auto;
  ul {
    li {
      height: auto;
    }
  }
  @media (max-width: 968px) {
    display: none;
  }
  a {
    text-decoration: none;
    color: #666;
    transition: 0.2s;
    &:hover {
      color: #000;
    }
  }
`;
export const Describe = styled.div`
  margin-top: 100px;
  color: #666;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
  }
  @media (max-width: 968px) {
    margin-top: 60px;
    width: 50%;

    p {
      font-size: 10px;
    }
  }
`;

export const Icons = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 968px) {
    width: 100px;
    display: flex;
    margin-left: 10px;
  }
  .IconItem {
    margin-top: 25px;
    color: #666;
    transition: 0.2s;
    cursor: pointer;

    @media (max-width: 968px) {
      margin: 0 auto;
    }
    &:hover {
      color: #000;
    }
  }
`;

export const Form = styled.div`
  input {
    padding: 11px 13px;
    background-color: transparent;
    border: 0.5px solid #666;
    color: #666;
    margin-top: 10px;
    outline: none;
    &::placeholder {
      color: #666;
    }
  }
`;

export const FooterMedia = styled.div`
  @media (min-width: 968px) {
    display: none;
  }
`;
export const ListItemMedia = styled.div`
  margin: 5px 0;
  ul {
    margin: 0;
    li {
      font-size: 12px;
      height: auto;
      margin-bottom: 20px;
    }
  }
  .linkMedia {
    text-decoration: none;
    color: #666;
    font-size: 14px;
  }
  .item_list {
    display: none;

    &_active {
      @media (max-width: 968px) {
        margin: 20px 0;
      }
    }
  }
`;
