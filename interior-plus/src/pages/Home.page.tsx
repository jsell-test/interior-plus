// import hooks
import { useEffect, useMemo, useState } from "react";

// import components
import Header from "../components/common/Header.component";
import NavMenu from "../components/Home/NavMenu.component";
import ProductList from "../components/Home/ProductList.component";
import RegionToggle from "../components/Home/RegionToggle.component";

// import context
import { HomeContext } from "../context/HomeContext.context";

// import api
import getRecentFurniture from "../apis/getRecentFurniture";

// import type
import { GetRecentFurniture } from "../interfaces/RecentFurnitureInfo";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true); // API 서버에서 데이터를 받아오는 중인가?
  const [recentProductList, setRecentProductList] = useState<
    GetRecentFurniture[]
  >([]); // API 서버에서 최신으로 등록된 가구 데이터 리스트를 사용하기 위한 state
  const [toggleRegion, setToggleRegion] = useState("all"); // 전체 지역과 사용자의 지역 중 선택하기 위한 state

  // 리렌더링을 막기 위해 useMemo로 캐싱
  const valueContextValue = useMemo(
    () => ({ isLoading, recentProductList }),
    [isLoading, recentProductList]
  );

  useEffect(() => {
    // getRecentFurniture().then((data) => {
    //   setRecentProductList([...data]);
    //   setIsLoading(false);
    // });
  }, []);

  const selectRegionHandler = () => {
    setToggleRegion(toggleRegion === "all" ? "region" : "all");
  };

  return (
    <HomeContext.Provider value={valueContextValue}>
      <Header info={{ pageTitle: "Hello" }} />
      <NavMenu />
      <RegionToggle
        props={{
          toggleHandler: selectRegionHandler,
          toggleValue: toggleRegion,
        }}
      />
      <ProductList />
    </HomeContext.Provider>
  );
};

export default HomePage;
