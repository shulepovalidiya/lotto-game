import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
`;

const Text = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
`;

export function ResultButton() {
  return (
    <Button type="submit">
      <Text>Показать результат</Text>
    </Button>
  );
}
