import { useCallback, useState } from 'react';
import { Field } from '../Field';
import { MagicWand } from '../MagicWand';
import { useNumberSelection } from '../../common/hooks/useNumberSelection';
import { Result } from '../Result';
import * as Styled from './styles';
import { ShowResultButton } from '../ShowResultButton';
import { generateRandomCombination } from '../../features/generateRandomCombination';
import { submitTicket } from '../../services/api';
import { GameConfig } from '../../common/constants/gameConfigs/types';

interface TicketProps {
  id: number;
  gameConfig: GameConfig;
}

export function Ticket({ id, gameConfig }: TicketProps) {
  const { fieldsConfig, checkIsTicketWon } = gameConfig;

  const [fieldSelectionStates, setSelectedFields] = useNumberSelection(fieldsConfig);

  const [isTicketWon, setIsTicketWon] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const getUserCombination = useCallback(
    () => fieldSelectionStates.map((fieldState) => fieldState.selectedNumbers),
    [fieldSelectionStates],
  );

  const logResults = (userCombination: number[][], winningCombination: number[][]) => {
    /* eslint-disable */
    console.log('%cuser combination:', 'font-weight: bold; color: #6699CC;');
    console.log(userCombination);
    console.log('%cwinning combination:', 'font-weight: bold; color: green;');
    console.log(winningCombination);
    /* eslint-enable */
  };

  const handleResultClick = useCallback(() => {
    const userCombination = getUserCombination();
    const winningCombination = generateRandomCombination(fieldsConfig);
    const isWon = checkIsTicketWon(userCombination, winningCombination);
    logResults(userCombination, winningCombination); // TODO: реализовать визуализацию
    setIsTicketWon(isWon);
    setIsGameOver(true);
    submitTicket(
      {
        selectedNumber: {
          firstField: userCombination[0],
          secondField: userCombination[1],
        },
        isTicketWon: isWon,
      },
      id,
    );
  }, [getUserCombination, fieldsConfig, checkIsTicketWon, id]);

  const handleMagicWandClick = useCallback(() => {
    setSelectedFields(generateRandomCombination(fieldsConfig));
  }, [setSelectedFields, fieldsConfig]);

  const isSelectionCompleted = fieldSelectionStates.every((fieldState) => fieldState.isSelectionCompleted);

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
            <Field config={fieldConfig} selectionState={fieldSelectionStates[index]} key={fieldConfig.id} />
          ))}
          <ShowResultButton disabled={!isSelectionCompleted} onClick={handleResultClick} />
        </>
      )}
    </Styled.TicketWrapper>
  );
}
