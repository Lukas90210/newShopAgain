import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../components/Home/Navbar/Navbar";
import Footer from "../../../components/Home/Footer/Footer";

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 0.5px solid #666;
  padding-bottom: 3px;
`;
const NoneLink = styled(Link)`
  text-decoration: none;
  border-bottom: 0.5px solid transparent;
  padding-bottom: 3px;
`;

const Journal = () => (
  <>
    <Navbar />
    <div className="container">
      <div className="content">
        <h1>About Us</h1>

        <ul className="list">
          <NoneLink to="/OurStory">
            <li>Our Story</li>
          </NoneLink>
          <NoneLink to="/ContactUs">
            <li>Contact Us</li>
          </NoneLink>
          <NoneLink to="/Faqs">
            <li>FAQs</li>
          </NoneLink>
          <StyledLink to="/Journal">
            <li>Journal</li>
          </StyledLink>
        </ul>
        <p>Lorem ipsum</p>
      </div>
    </div>
    <Footer />
  </>
);

export default Journal;
