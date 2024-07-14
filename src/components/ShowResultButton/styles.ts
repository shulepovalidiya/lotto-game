import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  &:hover {
    background-color: #ffd205;
  }
`;

export const Text = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`;
