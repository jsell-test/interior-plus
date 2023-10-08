import styled from "styled-components";
import * as Color from "../../constants/color";

export const MenuContainer = styled.div`
  width: 90%;
  height: 30%;
  background-color: ${Color.BACKGROUND_BLUE};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  margin: 30px auto;
`;
