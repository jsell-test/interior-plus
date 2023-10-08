// import component
import RegionToggle from "./RegionToggle.component";

// import style
import * as S from "../../styles/Home/ProductListSetting.style";

// import icons
import { VscSettings } from "react-icons/vsc";
import { CiGrid41 } from "react-icons/ci";

const ProductListSetting = () => {
  return (
    <S.Container>
      <RegionToggle />
      <S.IconContainer>
        <VscSettings size="24" />
        <CiGrid41 size="24" />
      </S.IconContainer>
    </S.Container>
  );
};

export default ProductListSetting;
