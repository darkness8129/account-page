import React from 'react';
import styled from '@emotion/styled';
import Paragraph from './FormParagraph';

const Question = styled.span`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: rgba(0, 0, 0, 0.6);

  & > a {
    color: #585858;
  }
`;

interface Props {
  question: string;
  linkText: string;
}

const FormQuestion = ({ question, linkText }: Props) => {
  return (
    <Paragraph>
      <Question>
        {question} <a href="#">{linkText}</a>
      </Question>
    </Paragraph>
  );
};

export default FormQuestion;
