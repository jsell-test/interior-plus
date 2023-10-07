// import styles
import * as S from "../../styles/Home/NavMenu.style";

// import components
import NavMenuItem from "./NavMenuItem.component";

const NavMenu = () => {
  return (
    <S.MenuContainer>
      <NavMenuItem />
      <NavMenuItem />
      <NavMenuItem />
    </S.MenuContainer>
  );
};

export default NavMenu;
