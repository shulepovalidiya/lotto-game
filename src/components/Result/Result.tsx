import * as Styled from './styles';

interface ResultProps {
  isTicketWon: boolean;
}

export function Result({ isTicketWon }: ResultProps) {
  return (
    <Styled.Span>
      {isTicketWon ? 'Ого, вы выиграли! Поздравляем!' : 'В этот раз выиграть не получилось :('}
    </Styled.Span>
  );
}
