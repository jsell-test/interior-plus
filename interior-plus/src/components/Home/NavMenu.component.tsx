// import styles
import * as S from "../../styles/Home/NavMenu.style";

// import components
import NavMenuItem from "./NavMenuItem.component";

const NavMenu = () => {
  return (
    <S.MenuContainer>
      <NavMenuItem title="커뮤니티" link="/community" />
      <NavMenuItem title="중고가구" link="/community" />
      <NavMenuItem title="용달" link="/community" />
    </S.MenuContainer>
  );
};

export default NavMenu;
