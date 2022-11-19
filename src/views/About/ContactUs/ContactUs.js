import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../components/Home/Navbar/Navbar";
import Footer from "../../../components/Home/Footer/Footer";
import "./ContactUs.scss";

const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 0.5px solid #666;
  padding-bottom: 3px;
  li {
    height: auto;
  }
`;
const NoneLink = styled(Link)`
  text-decoration: none;
  border-bottom: 0.5px solid transparent;
  padding-bottom: 3px;
`;

const ContactUs = () => (
  <>
    <Navbar />
    <div className="container">
      <div className="content">
        <h1>About Us</h1>

        <ul className="list">
          <NoneLink to="/OurStory">
            <li>Our Story</li>
          </NoneLink>
          <StyledLink to="/ContactUs">
            <li>Contact Us</li>
          </StyledLink>
          <NoneLink to="/Faqs">
            <li>FAQs</li>
          </NoneLink>
          <NoneLink to="/Journal">
            <li>Journal</li>
          </NoneLink>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis,
          orci sit amet vulputate blandit, lorem tortor rutrum tellus, tincidunt
          ornare erat est at tortor. Vestibulum pulvinar molestie ipsum ut
          luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nullam tincidunt elit quis ligula tempus accumsan. Ut lacinia lorem
          lorem, a malesuada nisi aliquet ac. Fusce tincidunt nulla eu dictum
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default ContactUs;
