import React from 'react';
import styled from '@emotion/styled';
import logo from 'assets/images/logo.png';

const StyledIntro = styled.article`
  width: 33%;
  display: flex;
  justify-content: center;
  font-family: Cera Pro, sans-serif;
  background-color: black;
  color: white;
  padding: 206.15px 10px 10px 10px;
  text-align: left;
`;

const Container = styled.div`
  width: 100%;
  max-width: 340px;
`;

const Logo = styled.img`
  display: block;
`;

const Title = styled.h1`
  font-size: 26px;
  line-height: 33px;
  color: #fcfbfe;
  margin: 77.15px 0 37.73px 0;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 23px;
  opacity: 0.8;
`;

const Intro = () => {
  return (
    <StyledIntro>
      <Container>
        <Logo src={logo} alt="Logo." />
        <Title>
          Create account
          <br /> to get started
        </Title>
        <Paragraph>
          Ryddm is a revolutionary new music discovery platform that will allow
          users to discover the top new tracks, and help musicians promote their
          music more efficiently than ever before.
        </Paragraph>
      </Container>
    </StyledIntro>
  );
};

export default Intro;
