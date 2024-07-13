import styled from 'styled-components';

const Button = styled.button<{ selected: boolean }>`
  width: ${(props) => (props.selected ? '34px' : '40px')};
  height: ${(props) => (props.selected ? '34px' : '40px')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  background-color: ${(props) => (props.selected ? '#FFD205' : '#ffffff')};
  box-sizing: border-box;
  padding: 0;
  &:hover {
    background-color: ${({ selected }) => (selected ? '#efc400' : '#f0f0f0')};
  }
`;

interface CellProps {
  number: number;
  selected: boolean;
  handleClick: (number: number) => void;
}

export function Cell({ number, selected, handleClick }: CellProps) {
  return (
    <Button selected={selected} onClick={() => handleClick(number)}>
      {number}
    </Button>
  );
}
