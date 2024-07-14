import { useCallback, useState } from 'react';
import { Field } from '../Field/Field.tsx';
import { MagicWand } from '../MagicWand/MagicWand.tsx';
import { useNumberSelection } from '../../common/hooks/useNumberSelection.ts';
import { generateWinningCombination } from '../../features/generateWinningCombination.ts';
import { Result } from '../Result/Result.tsx';
import * as Styled from './styles.ts';
import { IGameConfig } from '../../common/constants/gameConfigs/config8OutOf19.ts';
import { ShowResultButton } from '../ShowResultButton/ShowResultButton.tsx';

interface TicketProps {
  id: number;
  gameConfig: IGameConfig;
}

export function Ticket({ id, gameConfig }: TicketProps) {
  const { fieldsConfig, isGameWon } = gameConfig;

  const [fieldSelectionStates, setSelectedFields] =
    useNumberSelection(fieldsConfig);

  const [isTicketWon, setIsTicketWon] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const getUserCombination = useCallback(
    () => fieldSelectionStates.map((fieldState) => fieldState.selectedNumbers),
    [fieldSelectionStates],
  );

  const handleResultClick = useCallback(() => {
    const userCombination = getUserCombination();
    const winningCombination = generateWinningCombination(fieldsConfig);
    setIsTicketWon(isGameWon(userCombination, winningCombination));
    setIsGameOver(true);
  }, [
    setIsTicketWon,
    setIsGameOver,
    fieldsConfig,
    getUserCombination,
    isGameWon,
  ]);

  const handleMagicWandClick = useCallback(() => {
    setSelectedFields(generateWinningCombination(fieldsConfig));
  }, [setSelectedFields, fieldsConfig]);

  const isSelectionCompleted = fieldSelectionStates.every(
    (fieldState) => fieldState.isSelectionCompleted,
  );

  return (
    <Styled.TicketWrapper>
      <Styled.Header>
        <Styled.Heading>{`Билет ${id}`}</Styled.Heading>
        {!isGameOver && <MagicWand onClick={handleMagicWandClick} />}
      </Styled.Header>
      {isGameOver ? (
        <Result isTicketWon={isTicketWon} />
      ) : (
        <>
          {fieldsConfig.map((fieldConfig, index) => (
            <Field
              config={fieldConfig}
              selectionState={fieldSelectionStates[index]}
              key={fieldConfig.id}
            />
          ))}
          <ShowResultButton
            disabled={!isSelectionCompleted}
            onClick={handleResultClick}
          />
        </>
      )}
    </Styled.TicketWrapper>
  );
}
