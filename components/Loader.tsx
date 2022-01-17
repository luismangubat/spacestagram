import React from 'react'
import styled, { keyframes } from 'styled-components';


const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderDiv = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

const LoaderContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
`;

interface Show {
  show: Boolean;
}

const Loader = ({ show }: Show) => {
  return show ? null : <LoaderContainer ><LoaderDiv /></LoaderContainer >;
}

export default Loader;
