import React from 'react';
import styled from '@emotion/styled';
import Paragraph from './FormParagraph';

const FlexParagraph = styled(Paragraph)`
  display: flex;
  margin-bottom: 14px;
`;

const CheckboxLabel = styled.label`
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #585858;
  padding-left: 23px;

  & > a {
    color: #585858;
  }
`;

const Checkbox = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:checked + label,
  &:not(:checked) + label {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 14px;
    height: 14px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    border-radius: 3px;
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    position: absolute;
    transition: all 0.2s ease;
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    left: 3px;
    top: 4px;
    width: 8px;
    height: 5px;
    border-radius: 1px;
    border-left: 2px solid rgba(0, 0, 0, 0.9);
    border-bottom: 2px solid rgba(0, 0, 0, 0.9);
    transform: rotate(-45deg);
  }

  &:not(:checked) + label:after {
    opacity: 0;
  }

  &:checked + label:after {
    opacity: 1;
  }
`;

interface Props {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormAgreement = ({ id, name, checked, onChange }: Props) => {
  return (
    <FlexParagraph>
      <Checkbox
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        required
        onChange={(e) => onChange(e)}
      />
      <CheckboxLabel htmlFor={id}>
        By using app, you agree to our <a href="#">privacy policy</a> and
        <a href="#"> terms of service</a>.
      </CheckboxLabel>
    </FlexParagraph>
  );
};

export default FormAgreement;
