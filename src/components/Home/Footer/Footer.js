import React, { useState } from "react";
import {
  ListWrapper,
  ListItem,
  Describe,
  Icons,
  Form,
  FooterMedia,
  ListItemMedia,
  ItemMedia,
} from "./Footer.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Button from "../../Button/ButtonPrimary";

const Footer = () => {
  const [aboutIsActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!aboutIsActive);
  };

  const [customIsActive, setActive2] = useState(false);
  const handleToggle2 = () => {
    setActive2(!customIsActive);
  };

  const [contactIsActive, setActive3] = useState(false);
  const handleToggle3 = () => {
    setActive3(!contactIsActive);
  };

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: #666;
    transition: 0.2s;
    &:hover {
      color: #000;
    }
  `;

  const EmailLink = styled(Link)`
    text-decoration: none;
    color: #555;
    transition: 0.2s;
    border-bottom: 1px solid #555;
    font-size: 13px;
    line-height: 1;
    &:hover {
      color: #000;
      border-bottom: 1px solid transparent;
    }
  `;

  return (
    <ListWrapper>
      <ListItem>
        <p>SIGN UP AND GET 10% OFF ON YOUR FIRST ORDER.</p>
        <ul>
          <li>
            <p>
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
          </li>
        </ul>
        <Form>
          <input type="email" name="email" placeholder="Enter your email..." />
        </Form>
        <Button>Subscribe</Button>
      </ListItem>

      <ListItem>
        <p>ABOUT</p>
        <ul>
          <li>
            <a href="/OurStory">Our Story</a>
          </li>
          <li>
            <a href="/ContactUs">Contact Us</a>
          </li>
          <li>
            <a href="/Faqs">FAQs</a>
          </li>
          <li>
            <a href="/Journal">Journal</a>
          </li>
        </ul>
      </ListItem>

      <ListItem>
        <p>CUSTOMER ASSISTANCE</p>
        <ul>
          <li>
            <StyledLink>Delivery & Returns</StyledLink>
          </li>
          <li>
            <StyledLink>Terms & Conditions</StyledLink>
          </li>
          <li>
            <StyledLink>Privacy Policy</StyledLink>
          </li>
          <li>
            <StyledLink>Cookies</StyledLink>
          </li>
          <li>
            <StyledLink>How to Measure</StyledLink>
          </li>
        </ul>
      </ListItem>

      <ListItem>
        <p>CONTACT US</p>
        <ul>
          <li>
            <p>
              If you have any questions regarding order, sizing, retailing
              please send us a message and we will be in touch with you as soon
              as possible.
            </p>
          </li>
        </ul>
        <EmailLink>monthius022@gmail.com</EmailLink>
        <Icons>
          <BsInstagram className="IconItem" />
          <FaFacebookF className="IconItem" />
          <BsPinterest className="IconItem" />
        </Icons>
      </ListItem>

      <FooterMedia>
        <ListItemMedia>
          <Link className="linkMedia" to="/" onClick={handleToggle}>
            ABOUT
          </Link>
          <ul className={aboutIsActive ? "item_list_active" : "item_list"}>
            <li>
              <StyledLink>Our Story</StyledLink>
            </li>
            <li>
              <StyledLink>Contact Us</StyledLink>
            </li>
            <li>
              <StyledLink>FAQs</StyledLink>
            </li>
            <li>
              <StyledLink>Journal</StyledLink>
            </li>
          </ul>
        </ListItemMedia>

        <ListItemMedia>
          <Link className="linkMedia" to="/" onClick={handleToggle2}>
            CUSTOMER ASSISTANCE
          </Link>
          <ul className={customIsActive ? "item_list_active" : "item_list"}>
            <li>
              <StyledLink>Delivery & Returns</StyledLink>
            </li>
            <li>
              <StyledLink>Terms & Conditions</StyledLink>
            </li>
            <li>
              <StyledLink>Privacy Policy</StyledLink>
            </li>
            <li>
              <StyledLink>Cookies</StyledLink>
            </li>
            <li>
              <StyledLink>How to Measure</StyledLink>
            </li>
          </ul>
        </ListItemMedia>

        <ListItemMedia>
          <Link className="linkMedia" to="/" onClick={handleToggle3}>
            CONTACT US
          </Link>
          <ul className={contactIsActive ? "item_list_active" : "item_list"}>
            <li>
              <p>
                If you have any questions regarding order, sizing, retailing
                please send us a message and we will be in touch with you as
                soon as possible.
              </p>
            </li>
            <li>
              <EmailLink>monthius022@gmail.com</EmailLink>
              <Icons>
                <BsInstagram className="IconItem" />
                <FaFacebookF className="IconItem" />
                <BsPinterest className="IconItem" />
              </Icons>
            </li>
          </ul>
        </ListItemMedia>
      </FooterMedia>

      <Describe>
        <p>GOODIES WEBSITE SINCE 2022 | INSPIRED BY YERSINIA PESTIS</p>
        <p>Powered by Elecricity</p>
      </Describe>
    </ListWrapper>
  );
};

export default Footer;
