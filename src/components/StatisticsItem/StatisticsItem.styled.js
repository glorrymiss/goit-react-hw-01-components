import styled from '@emotion/styled';
import { generateRandomColor } from '../../utils/generateRandomColor';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 20px; */
  width: 70px;
  background-color: ${generateRandomColor};
  border: 1px solid grey;
`;

export const Label = styled.span`
  font-size: 18px;
  line-height: 1.68;
  text-align: right;
  letter-spacing: -0.01em;
  color: white;
`;
export const Percentage = styled.span`
  font-weight: 600;
  font-size: 22px;
  line-height: 1.68;
  text-align: right;
  letter-spacing: -0.01em;
  color: white;
`;
