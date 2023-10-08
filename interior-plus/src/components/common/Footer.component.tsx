// import style
import * as S from "../../styles/components/common/Footer.style";

// import icons
import { FiHome } from "react-icons/fi";
import { BsChatLeftDots } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.IconWrap to="/chat">
        <BsChatLeftDots size="24" />
        <p>채팅</p>
      </S.IconWrap>

      <S.IconWrap to="/">
        <FiHome size="24" />
        <p>홈</p>
      </S.IconWrap>

      <S.IconWrap to="/my">
        <BiUser size="24" />
        <p>마이메뉴</p>
      </S.IconWrap>
    </S.FooterContainer>
  );
};

export default Footer;
