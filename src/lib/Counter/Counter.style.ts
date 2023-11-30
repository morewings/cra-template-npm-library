import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgray;
  font-family: sans-serif;
  margin: 36px 24px;
  padding: 24px;
  text-align: center;
  width: 240px;
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 12px;
`;

export const Button = styled.button`
  background: lightseagreen;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 16px;
  margin: 0 auto 24px;
  padding: 12px 24px;
  text-shadow: 1px 1px 1px rgb(0 0 0 / 50%);

  &:active {
    left: 1px;
    position: relative;
    top: 1px;
  }
`;
