import styled from 'styled-components';

const Button = styled.button`
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

const Text = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`;

export function ResultButton({ disabled }: { disabled: boolean }) {
  return (
    <Button type="submit" disabled={disabled}>
      <Text>Показать результат</Text>
    </Button>
  );
}
