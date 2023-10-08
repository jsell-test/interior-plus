// import components
import Furniture from "./Furniture";
import Loader from "./Loader";

// import hooks
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import { useState, useRef, useContext, useEffect } from "react";

// import styles
import * as S from "../../styles/Home/FurnitureContainer.style";

// import apis
import getRecentFurniture from "../../apis/getRecentFurniture";

// import context
import { HomeContext } from "../../context/HomeContext.context";

// import interface
import { GetRecentFurniture } from "../../interfaces/RecentFurnitureInfo";

const FurnitureContainer = () => {
  const value = useContext(HomeContext);
  const idx = useRef<number>(0);
  const [list, setList] = useState<GetRecentFurniture[]>([]);

  const fetchList = async () => {
    const addList: GetRecentFurniture[] = await getRecentFurniture(
      value.toggleRegion,
      idx,
      10
    );
    await setList([...list, ...addList]);

    idx.current++;
  };

  const { isEnd } = useInfiniteScroll({ onScrollEnd: fetchList });

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <S.Container>
      {list.map((item) => (
        <Furniture info={item} />
      ))}
      {isEnd && <Loader />}
    </S.Container>
  );
};

export default FurnitureContainer;
