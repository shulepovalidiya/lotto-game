import styled from 'styled-components';
import { generateNaturalSeries } from '../../common/utils/generateNaturalSeries.ts';
import { Cell } from '../Cell/Cell.tsx';
import { pluralize } from '../../common/utils/pluralize.ts';

export interface IFieldConfig {
  totalCellCount: number;
  selectedCellCount: number;
}

interface FieldProps {
  config: IFieldConfig;
  number: number;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 39px);
  grid-template-rows: repeat(auto-fill, 39px);
  justify-content: center;
  align-items: center;
  width: 274px;
  height: 100%;
  box-sizing: border-box;
`;

const Heading = styled.h3`
  text-align: left;
  font-size: 14px;
  margin: 0;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 20px;
  white-space: nowrap;
`;

const Description = styled.p`
  text-align: left;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-height: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

export function Field({ config, number }: FieldProps) {
  const { totalCellCount, selectedCellCount } = config;
  const series = generateNaturalSeries(totalCellCount);

  return (
    <>
      <Header>
        <Heading>{`Поле ${number}`}</Heading>
        <Description>
          {`Отметьте ${selectedCellCount} ${pluralize(selectedCellCount, {
            one: 'число',
            few: 'числа',
            many: 'чисел',
          })}.`}
        </Description>
      </Header>
      <GridContainer>
        {series.map((integer) => (
          <Cell key={integer} number={integer} />
        ))}
      </GridContainer>
    </>
  );
}
