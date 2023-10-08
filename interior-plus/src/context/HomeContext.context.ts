import { GetRecentFurniture } from "./../interfaces/RecentFurnitureInfo";
import { createContext } from "react";

export const HomeContext = createContext({
  isLoading: true,
  toggleRegion: "",
  recentProductList: <GetRecentFurniture[]>[],
  selectRegionHandler: () => {},
});
