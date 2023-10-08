// import interface
import { RegionToggleInfo } from "../../interfaces/RegionToggleInfo";

// import style
import * as S from "../../styles/Home/RegionToggle.style";

type Props = {
  props: RegionToggleInfo;
};

const RegionToggle = ({ props }: Props) => {
  return (
    <S.ToggleWrap onClick={() => props.toggleHandler()}>
      {props.toggleValue === "all" ? (
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
