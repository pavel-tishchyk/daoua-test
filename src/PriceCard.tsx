import React from 'react'
import styled from 'styled-components'
import PriceOption from './PriceOption' 

const Card = styled.form`
  min-width: 320px;
  max-width: 500px;
  margin: auto;
  padding: 24px;
  background: white;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
`;

interface WrapperProps {
  flexDirection?: 'column' | 'row'
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around'
  alignItems?: 'center' | 'flex-start' | 'flex-end'
  padding?: string
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  padding: ${props => props.padding ? props.padding : '0px'}
`;

interface CardHeaderProps {
  fontSize?: string
  color?: string
  fontWeight?: string
  textAlign?: 'start' | 'end' | 'center'
}

const CardHeader = styled.h1<CardHeaderProps>`
  min-width: 120px;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '18px'};
  line-height: 21px;
  color: ${props => props.fontSize ? props.color : 'black'};
  text-align: ${props => props.textAlign ? props.textAlign : 'center'};
  margin: 0;
`;

const Button = styled.button`
  min-width: 140px;
  display: flex;
  align-items: center;
  background: #6CA22C;
  border: none;
  outline: none;
  border-radius: 8px;
  padding: 16px;
`;

const PriceCard: React.FC = () => {
  const [prices, setPrices] = React.useState([
    {id: 0, price: '500грн', weight: '500 г'},
    {id: 1, price: '150грн', weight: '100 г'},
    {id: 2, price: '90грн', weight: '50 г'},
  ])

  const [currentPrice, setCurrentPrice] = React.useState(prices[0]) 

  return(
    <Card onSubmit={() => console.log(currentPrice)}>
      <Wrapper 
        justifyContent='space-between' 
        padding='0px 0px 8px 0px'
      >
        <CardHeader  textAlign='start'>Тип</CardHeader>
        <CardHeader textAlign='end'>Ціна</CardHeader>
      </Wrapper>
      {prices.map((price) => 
        <PriceOption 
          key={price.id}
          checked={currentPrice.id === price.id ? true : false} 
          {...price} 
          setChecked={() => setCurrentPrice(price)}
        />
      )}
      <Wrapper 
        justifyContent='space-around' 
        padding='24px 0px 16px 0px'
      >
        <CardHeader fontSize='24'>{currentPrice.price}</CardHeader>
        <Button type='submit'>
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.73254 14.5158H7.73364C7.73456 14.5158 7.73547 14.5156 7.73639 14.5156H20.4844C20.7982 14.5156 21.0742 14.3074 21.1604 14.0057L23.9729 4.16193C24.0335 3.94971 23.991 3.72156 23.8583 3.54541C23.7253 3.36926 23.5175 3.26562 23.2969 3.26562H6.11096L5.60834 1.00372C5.53674 0.682007 5.25146 0.453125 4.92188 0.453125H0.703125C0.314758 0.453125 0 0.767883 0 1.15625C0 1.54462 0.314758 1.85937 0.703125 1.85937H4.35791C4.4469 2.26019 6.76318 12.6837 6.89648 13.2833C6.14923 13.6082 5.625 14.3532 5.625 15.2187C5.625 16.3818 6.57129 17.3281 7.73438 17.3281H20.4844C20.8727 17.3281 21.1875 17.0134 21.1875 16.625C21.1875 16.2366 20.8727 15.9219 20.4844 15.9219H7.73438C7.34674 15.9219 7.03125 15.6064 7.03125 15.2187C7.03125 14.8317 7.34564 14.5167 7.73254 14.5158ZM22.3647 4.67187L19.9539 13.1094H8.29834L6.42334 4.67187H22.3647Z" fill="white"/>
          </svg>
          <CardHeader 
            fontWeight='bold' 
            color='white' 
            fontSize='12' 
            style={{paddingLeft: '8px', minWidth: '75px'}}
          >
            До кошика
          </CardHeader>
        </Button>
      </Wrapper>
    </Card>
  );
}

export default PriceCard
