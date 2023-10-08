// import style
import * as S from "../../styles/Home/RegionToggle.style";

// import context
import { HomeContext } from "../../context/HomeContext.context";
import { useContext } from "react";

const RegionToggle = () => {
  const value = useContext(HomeContext);

  return (
    <S.ToggleWrap onClick={() => value.selectRegionHandler()}>
      {value.toggleRegion === "all" ? (
        <>
          <S.Selected>전국</S.Selected>
          <S.ToggleItem_Right>동네</S.ToggleItem_Right>
        </>
      ) : (
        <>
          <S.ToggleItem_Left>전국</S.ToggleItem_Left>
          <S.Selected>동네</S.Selected>
        </>
      )}
    </S.ToggleWrap>
  );
};

export default RegionToggle;
