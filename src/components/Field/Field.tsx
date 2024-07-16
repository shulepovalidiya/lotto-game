import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries.ts';
import { Cell } from '../Cell/Cell.tsx';
import { pluralize } from '../../common/utils/pluralize/pluralize.ts';
import { IFieldConfig } from '../../common/constants/gameConfigs/config8OutOf19.ts';
import { FieldState } from '../../common/hooks/useNumberSelection.ts';
import * as Styled from './styles.ts';

interface FieldProps {
  config: IFieldConfig;
  selectionState: FieldState;
}

export function Field({ config, selectionState }: FieldProps) {
  const { totalCellCount, requiredCellCount, id } = config;
  const { toggleNumber, selectedNumbers } = selectionState;

  const series = generateNaturalSeries(totalCellCount);

  return (
    <>
      <Styled.Header>
        <Styled.Heading>{`Поле ${id}`}</Styled.Heading>
        <Styled.Description>
          {`Отметьте ${requiredCellCount} ${pluralize(requiredCellCount, {
            one: 'число',
            few: 'числа',
            many: 'чисел',
          })}.`}
        </Styled.Description>
      </Styled.Header>
      <Styled.CellWrapper>
        {series.map((integer) => (
          <Cell
            key={integer}
            number={integer}
            selected={selectedNumbers.includes(integer)}
            handleClick={toggleNumber}
          />
        ))}
      </Styled.CellWrapper>
    </>
  );
}
