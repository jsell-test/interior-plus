import styled from "styled-components";
import * as Color from "../../../constants/color";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  border: 2px solid ${Color.BACKGROUND_BLUE};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IconWrap = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
