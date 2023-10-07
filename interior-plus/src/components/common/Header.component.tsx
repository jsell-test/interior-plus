import { PageTitleInfo } from "../../interfaces/PageTitleInfo";

// import style
import * as S from "../../styles/components/common/Header.style";

type InfoProps = {
  info: PageTitleInfo;
};

const Header = ({ info }: InfoProps) => {
  const { pageTitle } = info;
  return (
    <S.HeaderContainer>
      <S.PageTitle>{pageTitle}</S.PageTitle>
    </S.HeaderContainer>
  );
};

export default Header;
