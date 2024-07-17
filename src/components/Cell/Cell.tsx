import * as Styled from './styles';

interface CellProps {
  number: number;
  selected: boolean;
  handleClick: (number: number) => void;
}

export function Cell({ number, selected, handleClick }: CellProps) {
  return (
    <Styled.Button selected={selected} onClick={() => handleClick(number)}>
      {number}
    </Styled.Button>
  );
}
