import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries.ts';
import { IGameConfig } from '../../common/constants/gameConfigs/config8OutOf19.ts';
import * as Styled from '../../app/styles.ts';
import { Ticket } from '../Ticket/Ticket.tsx';

interface GameProps {
  gameConfig: IGameConfig;
}

export function Game({ gameConfig }: GameProps) {
  const ticketsIdList = generateNaturalSeries(gameConfig.initialTicketsCount);

  return (
    <Styled.TicketsWrapper>
      {ticketsIdList.map((id) => (
        <Ticket id={id} key={id} gameConfig={gameConfig} />
      ))}
    </Styled.TicketsWrapper>
  );
}
