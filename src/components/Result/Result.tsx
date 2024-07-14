import * as Styled from './styles.ts';

interface ResultProps {
  isTicketWon: boolean;
}

export function Result(props: ResultProps) {
  const { isTicketWon } = props;
  return (
    <Styled.Span>
      {isTicketWon
        ? 'Ого, вы выиграли! Поздравляем!'
        : 'В этот раз выиграть не получилось :('}
    </Styled.Span>
  );
}
