import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
  padding: 0 24px;

  background-color: #3366FF;

  h1 {
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;

  padding: 0 16px;

  background-color: white;
  border-radius: 8px;
  border: none;
  outline: none;
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
`;