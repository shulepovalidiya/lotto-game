import styled from 'styled-components';
import { Field } from '../Field/Field.tsx';
import { ResultButton } from '../ResultButton/ResultButton.tsx';
import {
  FIRST_FIELD_CONFIG,
  SECOND_FIELD_CONFIG,
} from '../../common/constants/tickets.ts';
import { MagicWand } from '../MagicWand/MagicWand.tsx';
import { useNumberSelection } from '../../common/hooks/useNumberSelection.ts';

interface TicketProps {
  id: number;
}

const Wrapper = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 296px;
  min-height: 368px;
  border-radius: 6px;
  border: 1px grey solid;
  padding: 11px;
  background: #ffffff;
  box-sizing: border-box;
`;

const Heading = styled.h2`
  text-align: left;
  font-size: 16px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 85%;
  max-height: 22px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export function Ticket({ id }: TicketProps) {
  const firstField = useNumberSelection(FIRST_FIELD_CONFIG.selectedCellCount);
  const secondField = useNumberSelection(SECOND_FIELD_CONFIG.selectedCellCount);

  return (
    <Wrapper>
      <Header>
        <Heading>{`Билет ${id}`}</Heading>
        <MagicWand />
      </Header>
      <Field
        config={FIRST_FIELD_CONFIG}
        number={1}
        selectionInfo={firstField}
      />
      <Field
        config={SECOND_FIELD_CONFIG}
        number={2}
        selectionInfo={secondField}
      />
      <ResultButton
        disabled={
          !firstField.isSelectionCompleted || !secondField.isSelectionCompleted
        }
      />
    </Wrapper>
  );
}
