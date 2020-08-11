import * as React from 'react'
import styled from 'styled-components';

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 11px;
  
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 5px;
      background: #6CA22C; 
    }
  ${props =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 1px solid #6CA22C;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 5px;
        background: #6CA22C;
      }
    }
    &:checked + ${Label} {
      color: black
    }
  `}
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 0px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #999999;
`;

interface LabelProps {
  readonly checked: boolean;
};

const Label = styled.label<LabelProps>`
  position: absolute;
  top: 25%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
    &:last-child {
      right: 0;4px
    }
  color: ${props => props.checked ? 'black' : '#999999'}
`;

const Item = styled.div`
  position: relative;
  padding-bottom: 4px;
`;

interface RadioButtonTLProps {
  firstLabel: string
  secondLabel: string
  checked: boolean
  onClick: () => void 
  children?: React.ReactNode 
} 

const RadioButtonTwoLabel: React.FC<RadioButtonTLProps> = ({firstLabel, secondLabel, checked, onClick}) => (
  <Item onClick={onClick}>
    <RadioButton 
      type="radio"  
      name="radio-button" 
      checked={checked}
      defaultChecked={checked}
    />
    <RadioButtonLabel/>
    <Label checked={checked}>{firstLabel}</Label>
    <Label checked={checked}>{secondLabel}</Label>
  </Item>
);

interface PriceOptionProps {
  key: any
  id: number
  price: string
  weight: string
  checked: boolean
  setChecked: () => void
  children?: React.ReactNode 
} 

const PriceOption: React.FC<any> = ({price, weight, checked, setChecked}) => (
  <RadioButtonTwoLabel 
    firstLabel={weight} 
    secondLabel={price} 
    checked={checked} 
    onClick={setChecked}
  />
);

export default PriceOption
