import styled from 'styled-components';
import { PlaneTakeOff } from '@styled-icons/boxicons-solid/PlaneTakeOff';

export const BluePlaneTakeOff = styled(PlaneTakeOff)`
  color: '#5FDAE3';
`;

export const StyledForm = styled.form`
  /* background-color: yellow; */
  padding: 1em;
  display: flex;
`;

export const StyledDateWrapper = styled.div`
  padding: 1em;
`;

export const Row = styled.div`
  &:not(:first-child) {
    margin-top: 18px;
    &:last-child {
      margin-top: 28px;
    }
  }
`;