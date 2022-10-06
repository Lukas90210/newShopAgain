import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Form.scss";

const SubLink = styled(Link)`
  text-decoration: none;
  color: #000;
  transition: 0.2s;
  &:hover {
    color: #666;
  }
`;

const Form = () => {
  return (
    <div className="container">
      <form>
        <h2>LOGIN</h2>
        <p>Please enter your e-mail and password:</p>
        <label>
          <input
            className="input"
            type="text"
            name="password"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            className="input"
            type="text"
            name="password"
            placeholder="Password"
          />
        </label>
        <input className="login" type="submit" value="LOGIN" />
        <p className="subtext">
          Don't have an account?
          <SubLink>Create one</SubLink>
        </p>
      </form>
    </div>
  );
};

export default Form;
