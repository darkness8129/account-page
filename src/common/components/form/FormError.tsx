import React from 'react';
import styled from '@emotion/styled';

const Error = styled.span`
  display: block;
  font-size: 10px;
  line-height: 12px;
  font-weight: 500;
  color: #ef3737;
  margin-bottom: 10px;
`;

interface Props {
  message: string;
}

const FormError = ({ message }: Props) => {
  return <Error>{message}</Error>;
};

export default FormError;
