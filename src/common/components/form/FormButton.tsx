import React from 'react';
import styled from '@emotion/styled';
import Paragraph from './FormParagraph';

const Button = styled.button`
  width: 100%;
  padding: 12px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: black;
  }
`;

interface Props {
  text: string;
  isDisabled: boolean;
}

const FormButton = ({ text, isDisabled }: Props) => {
  return (
    <Paragraph>
      <Button type="submit" disabled={isDisabled}>
        {text}
      </Button>
    </Paragraph>
  );
};

export default FormButton;