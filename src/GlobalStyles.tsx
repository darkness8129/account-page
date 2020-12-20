import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        body,
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        input {
          margin: 0;
          padding: 0;
        }

        button {
          border: none;
        }

        body {
          font-style: normal;
          font-weight: normal;
          line-height: 100%;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        @font-face {
          font-family: 'Cera Pro';
          src: url('./common/assets/fonts/CeraPro.woff2') format('woff2');
        }

        @font-face {
          font-family: 'Roboto';
          src: url('./common/assets/fonts/Roboto.woff2') format('woff2');
        }
      `}
    />
  );
};

export default GlobalStyles;
