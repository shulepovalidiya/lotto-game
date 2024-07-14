import styled from 'styled-components';

interface ResultProps {
  isSuccess: boolean;
}

const Span = styled.span`
  margin: 0;
`;

export function Result(props: ResultProps) {
  const { isSuccess } = props;
  return (
    <Span>
      {isSuccess
        ? 'Ого, вы выиграли! Поздравляем!'
        : 'В этот раз выиграть не получилось :('}
    </Span>
  );
}
