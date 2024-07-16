import { useCallback, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Field } from '../Field/Field.tsx';
import { MagicWand } from '../MagicWand/MagicWand.tsx';
import { useNumberSelection } from '../../common/hooks/useNumberSelection.ts';
import { Result } from '../Result/Result.tsx';
import * as Styled from './styles.ts';
import { IGameConfig } from '../../common/constants/gameConfigs/config8OutOf19.ts';
import { ShowResultButton } from '../ShowResultButton/ShowResultButton.tsx';
import { generateRandomCombination } from '../../common/utils/generateRandomCombination.ts';
import { submitTicket } from '../../services/api/submitTicket.ts';

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

  const getUserCombination = () => fieldSelectionStates.map((fieldState) => fieldState.selectedNumbers);

  const memoizedGetUserCombination = useCallback(getUserCombination, [
    fieldSelectionStates,
  ]);

  const handleResultClick = useCallback(() => {
    const userCombination = memoizedGetUserCombination();
    const winningCombination = generateRandomCombination(fieldsConfig);
    const isWon = isGameWon(userCombination, winningCombination);
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
  }, [memoizedGetUserCombination, fieldsConfig, isGameWon, id]);

  const handleMagicWandClick = useCallback(() => {
    setSelectedFields(generateRandomCombination(fieldsConfig));
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
      <Toaster />
    </Styled.TicketWrapper>
  );
}
