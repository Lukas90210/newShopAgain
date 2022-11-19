import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../components/Home/Navbar/Navbar";
import Footer from "../../../components/Home/Footer/Footer";
import "./OurStory.scss";

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

const OurStory = () => (
  <>
    <Navbar />
    <div className="container">
      <div className="content">
        <h1>About Us</h1>

        <ul className="list">
          <StyledLink to="/OurStory">
            <li>Our Story</li>
          </StyledLink>
          <NoneLink to="/ContactUs">
            <li>Contact Us</li>
          </NoneLink>
          <NoneLink to="/Faqs">
            <li>FAQs</li>
          </NoneLink>
          <NoneLink to="/Journal">
            <li>Journal</li>
          </NoneLink>
        </ul>
        <p className="paragraph1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis,
          orci sit amet vulputate blandit, lorem tortor rutrum tellus, tincidunt
          ornare erat est at tortor. Vestibulum pulvinar molestie ipsum ut
          luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nullam tincidunt elit quis ligula tempus accumsan. Ut lacinia lorem
          lorem, a malesuada nisi aliquet ac. Fusce tincidunt nulla eu dictum
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default OurStory;
