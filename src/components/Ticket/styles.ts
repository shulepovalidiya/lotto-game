import styled from 'styled-components';

export const TicketWrapper = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 296px;
  min-height: 368px;
  border-radius: 6px;
  border: 1px grey solid;
  padding: 11px;
  background: #ffffff;
  box-sizing: border-box;
`;

export const Heading = styled.h2`
  text-align: left;
  font-size: 16px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 85%;
  max-height: 22px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;
