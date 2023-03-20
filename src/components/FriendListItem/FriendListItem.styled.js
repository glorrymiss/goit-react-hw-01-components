import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  background-color: white;
  min-width: 350px;
  height: 85px;
  margin-bottom: 8px;
  padding: 0 20px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.12), 2px 6px 6px rgba(0, 0, 0, 0.06),
    2px 6px 8px rgba(0, 0, 0, 0.16);
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  display: inline-block;
  width: 64px;
  height: 64px;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 33px;
  letter-spacing: -0.01em;

  color: black;
  margin-bottom: 10px;
`;
