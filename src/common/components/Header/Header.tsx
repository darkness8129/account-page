import React from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo/Logo';

const StyledHeader = styled.header`
  width: 100%;
  padding: 50px 70px;
  position: fixed;
  z-index: 1000;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Logo color="black" />
    </StyledHeader>
  );
};

export default Header;
