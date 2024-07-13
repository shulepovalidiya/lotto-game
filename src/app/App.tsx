import styled from 'styled-components';
import { Ticket } from '../components/Ticket/Ticket.tsx';
import { TICKETS_COUNT } from '../common/constants/tickets.ts';
import { generateNaturalSeries } from '../common/utils/generateNaturalSeries.ts';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export function App() {
  const ticketsIdList = generateNaturalSeries(TICKETS_COUNT);

  return (
    <Wrapper>
      {ticketsIdList.map((id) => (
        <Ticket id={id} key={id} />
      ))}
    </Wrapper>
  );
}
