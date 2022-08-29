import React from "react";
import styled from "styled-components";
import theme from "../../Logic/theme.js";
import Footer from "../Footer";
import Logo from "../../Images/Logo";
import InputField from "../../Componets/InputField";
import Button from "../../Buttons/LinkButton";
import Pathway from "../../Images/Pathway";

const { primary, quad, background } = theme;

const Container = styled.div`
  background-color: ${background};
  width: 99vw;
  height: calc(100vh - 75px);
  text-align: center;
  margin: 0 auto;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const InLine = styled.div`
  display: inline-flex;
  width: 100%;
  max-width: 400px;
  margin-top: 5px;
  justify-content: space-around;
`;

const LoginBox = styled.div`
  width: 90vw;
  max-width: 600px;
  min-height: 375px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  border: solid 4px ${primary};
  border-radius: 5px;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -60%);

  @media (max-width: 600px) {
    margin-left: 7px;
    margin-top: 8vh;
  }
`;

const StyledLogo = styled(Logo)`
  width: 275px;
  margin: -15px auto 0;
`;

const H1 = styled.h1`
  font-size: 2.5em;
  color: ${primary};
`;

const H2 = styled.p`
  font-size: 1.5em;
  font-family: "Dosis";
  margin-top: -2px;
  color: ${primary};
`;

const Form = styled.form`
  width: 20vw;
  display: block;
  margin: 0 auto 10px;

  @media (max-width: 1200px) {
    margin: 35px auto 20px;
    width: 30vw;
  }

  @media (max-width: 900px) {
    margin: 35px auto 20px;
    width: 40vw;
  }

  @media (max-width: 600px) {
    margin-top: 10px;
    width: 70vw;
  }
`;

const InputBox = styled.div`
  margin-top: -20px;
`;

const Link = styled.p`
  color: ${primary};
  font-size: 0.8em;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: ${quad};
  }
`;

const Divider = styled.hr`
  border: 1px solid ${primary};
`;

const Login = () => {
  return (
    <div>
      <Container>
        <Pathway color={primary} />
        <LoginBox>
          <H1>Welcome To</H1>
          <StyledLogo />
          <H2>
            Alpha <span style={{ fontSize: 10 }}>V 0.2</span>
          </H2>
          <Form>
            <InputBox>
              <InputField placeholder="User Name" type="email" />
              <InputField placeholder="Password" type="password" />
            </InputBox>
            <InLine>
              <Link
                onClick={() => {
                  window.location = "mailto:john.jurmu@gmail.com";
                }}
              >
                Request an invite
              </Link>
              <Button text="Login" href="/character" />
            </InLine>
          </Form>
          <Divider />
          <InLine>
            <div style={{ marginTop: 5 }}>
              <H2>I just want to roll some dice </H2>
            </div>
            <Button text={"Roll Here"} href="/freeroll"></Button>
          </InLine>
        </LoginBox>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
