import styled from "styled-components";

export const MenuItem = styled.div<{ active : boolean}>`
  font-weight: 700;
  font-size: 14px;
  line-height: 23px;
  padding: 0 15px;
  //color:  rgba(231, 227, 252, 0.38);
  //background: #30334E;
  color: rgba(231, 227, 252, 0.38);
  cursor: pointer;
`;
