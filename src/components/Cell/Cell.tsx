import * as Styled from './styles';

interface CellProps {
  number: number;
  isSelected: boolean;
  handleClick: (number: number) => void;
}

export function Cell({ number, isSelected, handleClick }: CellProps) {
  return (
    <Styled.Button selected={isSelected} onClick={() => handleClick(number)}>
      {number}
    </Styled.Button>
  );
}
