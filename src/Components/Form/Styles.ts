import styled from 'styled-components';
import { PlaneTakeOff } from '@styled-icons/boxicons-solid/PlaneTakeOff';

export const BluePlaneTakeOff = styled(PlaneTakeOff)`
  color: '#5FDAE3';
`;

export const StyledForm = styled.form`

`;

export const StyledLocationSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1em;
`;

export const Row = styled.div`
  &:not(:first-child) {
    margin-top: 18px;
    &:last-child {
      margin-top: 28px;
    }
  }
`;