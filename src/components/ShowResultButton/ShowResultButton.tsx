import * as Styled from './styles';

interface ShowResultButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export function ShowResultButton({ disabled, onClick }: ShowResultButtonProps) {
  return (
    <Styled.Button type="submit" disabled={disabled} onClick={onClick}>
      <Styled.Text>Показать результат</Styled.Text>
    </Styled.Button>
  );
}
