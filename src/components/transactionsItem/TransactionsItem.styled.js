import styled from '@emotion/styled';

export const Data = styled.td`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.38;
  background-color: transparent;
  color: #a8a8a8;
  text-align: center;
  text-transform: capitalize;
  padding: 8px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.12), 1px 0px 0px rgba(0, 0, 0, 0.06),
    0px 1px 1px rgba(0, 0, 0, 0.16);

  &:nth-of-type() {
  }
`;

export const Wrap = styled.tr`
  :nth-of-type(even) {
    background-color: rgb(221, 245, 245);
  }
  :nth-of-type(odd) {
    background-color: white;
  }
`;
