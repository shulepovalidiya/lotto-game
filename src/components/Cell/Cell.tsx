import styled from 'styled-components';

interface CellProps {
  number: number;
}

const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0;
`;

export function Cell({ number }: CellProps) {
  return <Button>{number}</Button>;
}
