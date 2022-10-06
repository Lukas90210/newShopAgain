import { Container, Content, Form } from "./Newsletter.styled";
import Button from "../../Button/ButtonPrimary";

const Newsletter = () => (
  <Container>
    <Content>
      <h4>KEEP UPDATED</h4>
      <h3>STAND FIRMLY ON THE GOLDEN AGE</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        perspiciatis libero voluptate molestiae laborum dicta ex distinctio
        provident. Animi, maxime.
      </p>
      <Form>
        <input type="email" name="email" placeholder="Enter your email..." />
        <Button>Subscribe</Button>
      </Form>
    </Content>
  </Container>
);

export default Newsletter;
