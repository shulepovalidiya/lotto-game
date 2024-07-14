import styled from 'styled-components';

export const CellWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 39px);
  grid-template-rows: repeat(auto-fill, 39px);
  place-items: center;
  width: 274px;
  height: 100%;
  box-sizing: border-box;
`;

export const Heading = styled.h3`
  text-align: left;
  font-size: 14px;
  margin: 0;
  max-width: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 20px;
  white-space: nowrap;
`;

export const Description = styled.p`
  text-align: left;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-height: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;
