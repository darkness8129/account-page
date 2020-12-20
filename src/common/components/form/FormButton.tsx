import React from 'react';
import styled from '@emotion/styled';
import Paragraph from './FormParagraph';

const Button = styled.button`
  width: 100%;
  padding: 12px;
  color: white;
  font-family: Roboto, sans-serif;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;

interface Props {
  text: string;
}

const FormButton = ({ text }: Props) => {
  return (
    <Paragraph>
      <Button type="submit">{text}</Button>
    </Paragraph>
  );
};

export default FormButton;
