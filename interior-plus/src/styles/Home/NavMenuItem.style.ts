import styled from "styled-components";
import * as Color from "../../constants/color";
import { Link } from "react-router-dom";

export const ItemContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${Color.BLUE};
  display: grid;
  place-items: center;
`;
