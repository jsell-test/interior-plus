import styled from "styled-components";
import * as Color from "../../constants/color";

export const MenuContainer = styled.div`
  width: 90%;
  height: 15%;
  background-color: ${Color.BACKGROUND_BLUE};
  border-radius: 8px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  ]place-items: center;
  margin: 30px auto;
`;
