import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries';
import * as Styled from '../../app/styles';
import { Ticket } from '../Ticket';
import { GameConfig } from '../../common/constants/gameConfigs/types';

interface GameProps {
  config: GameConfig;
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
