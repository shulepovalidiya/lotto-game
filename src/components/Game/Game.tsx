import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries';
import * as Styled from '../../app/styles';
import { Ticket } from '../Ticket';
import { IGameConfig } from '../../common/constants/gameConfigs/types';

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
