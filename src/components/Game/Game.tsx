import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries.ts';
import { IGameConfig } from '../../common/constants/gameConfigs/config8OutOf19.ts';
import * as Styled from '../../app/styles.ts';
import { Ticket } from '../Ticket/Ticket.tsx';

interface GameProps {
  config: IGameConfig;
}

export function Game({ config }: GameProps) {
  const ticketsIdList = generateNaturalSeries(config.initialTicketsCount);

  return (
    <Styled.TicketsWrapper>
      {ticketsIdList.map((id) => (
        <Ticket id={id} key={id} gameConfig={config} />
      ))}
    </Styled.TicketsWrapper>
  );
}
