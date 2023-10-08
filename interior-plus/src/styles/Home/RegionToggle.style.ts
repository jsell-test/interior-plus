import styled from "styled-components";

export const ToggleWrap = styled.div`
  width: 30%;
  height: 5%;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Selected = styled.span`
  color: white;
  background-color: #ea374f;
  padding: 10px 15px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-weight: bold;
`;

export const ToggleItem_Right = styled.span`
  margin-right: 15px;
`;

export const ToggleItem_Left = styled.span`
  margin-left: 15px;
`;
