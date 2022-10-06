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

const Faqs = () => (
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
          <StyledLink to="/Faqs">
            <li>FAQs</li>
          </StyledLink>
          <NoneLink to="/Journal">
            <li>Journal</li>
          </NoneLink>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis,
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default Faqs;
