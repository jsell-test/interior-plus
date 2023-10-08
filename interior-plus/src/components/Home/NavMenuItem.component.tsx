// import style
import * as S from "../../styles/Home/NavMenuItem.style";

type NavMenuProps = {
  title: string;
  link: string;
};

const NavMenuItem = ({ title, link }: NavMenuProps) => {
  return (
    <S.ItemContainer to={link}>
      <S.IconBox></S.IconBox>
      <p>{title}</p>
    </S.ItemContainer>
  );
};

export default NavMenuItem;
