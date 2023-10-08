// import styles
import * as S from "../../styles/Home/Furniture.style";

// import interface
import { GetRecentFurniture } from "../../interfaces/RecentFurnitureInfo";

type InfoProps = {
  info: GetRecentFurniture;
};

const Furniture = ({ info }: InfoProps) => {
  const { id, title, price, location, likes, mainImageUrl } = info;

  return (
    <S.FurnitureContainer>
      <p>{id}</p>
      <p>{title}</p>
      <p>{price}</p>
      <p>{location}</p>
      <p>{likes}</p>
      <p>{mainImageUrl}</p>
    </S.FurnitureContainer>
  );
};

export default Furniture;
