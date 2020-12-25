import React from 'react';
import blackLogo from 'common/assets/images/logo-black.png';
import whiteLogo from 'common/assets/images/logo-white.png';
import styled from '@emotion/styled';

const StyledLogo = styled.img`
  display: block;
`;

interface Props {
  color: 'white' | 'black';
}

const Logo = ({ color }: Props) => {
  return (
    <StyledLogo src={color === 'white' ? whiteLogo : blackLogo} alt="Logo." />
  );
};

export default Logo;
