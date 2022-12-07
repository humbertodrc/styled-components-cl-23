import React from 'react';
import styled from 'styled-components';
export interface CardInterface {}

const Card : React.FC<CardInterface> = () => {
	return <CardStyle>Card</CardStyle>;
};

export const CardStyle = styled.div``;

export default Card;
