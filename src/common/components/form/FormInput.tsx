import React from 'react';
import styled from '@emotion/styled';
import Paragraph from './FormParagraph';

const InputLabel = styled.label`
  display: inline;
  font-size: 12px;
  line-height: 15px;
  color: #585858;
`;

const Prompt = styled(InputLabel)`
  opacity: 0.7;
`;

const Input = styled.input`
  width: 100%;
  margin-top: 6px;
  padding: 12px 14px;
  font-family: Cera Pro, sans-serif;
  color: black;
  font-size: 12px;
  line-height: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

interface Props {
  labelText: string;
  promptText: string;
  placeholder: string;
  type: string;
  id: string;
  name: string;
  value: string;
  isRequired: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  labelText,
  promptText,
  placeholder,
  type,
  id,
  name,
  value,
  isRequired,
  onChange,
}: Props) => {
  return (
    <Paragraph>
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
      <Prompt>{promptText}</Prompt>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={isRequired}
        onChange={(e) => onChange(e)}
      />
    </Paragraph>
  );
};

export default FormInput;
