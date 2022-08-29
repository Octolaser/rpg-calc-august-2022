import React from "react";
import styled from "styled-components";
import theme from "../Logic/theme";

const { secondary, tri, background } = theme;

const Container = styled.div`
  width: 99vw;
  min-height: 50px;
  margin-top: -5px;
  background-color: ${background};

  @media (max-width: 600px) {
    width: 100vw;
  }
`;

const Text = styled.p`
  color: ${tri};
  text-align: center;
  padding-top: 15px;

  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding-top: 20px;
  }
`;

const Link = styled.a`
  color: ${tri};
  text-decoration: underline;
  :hover {
    color: ${secondary};
  }
`;

const Footer = () => {
  return (
    <Container key={"footer container"}>
      <Text key={"footer container"}>
        RPG Calculator is an independent project. Copyright 2022&#160;{" "}
        <Link
          href={"http://www.deloscreative.com/"}
          rel={"noreferrer"}
          target={"_blank"}
          key={"shamless self plug"}
        >
          John Jurmu
        </Link>
      </Text>
    </Container>
  );
};

export default Footer;
