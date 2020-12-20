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

  & > a {
    color: #585858;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

interface Props {
  id: string;
  name: string;
  checked: boolean;
  onChange: (value: boolean) => void;
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
        onChange={(e) => onChange(e.target.checked)}
      />
      <CheckboxLabel htmlFor={id}>
        By using app, you agree to our <a href="#">privacy policy</a> and
        <a href="#"> terms of service</a>.
      </CheckboxLabel>
    </FlexParagraph>
  );
};

export default FormAgreement;
