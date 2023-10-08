import { getData } from ".";
import { GetRecentFurniture } from "../interfaces/RecentFurnitureInfo";
import { exampleFurnitureData } from "../models/RecentFurniture";

const getRecentFurniture = async (
  region: string,
  offset: number,
  limit: number
): Promise<GetRecentFurniture[]> => {
  try {
    // const response = await getData<GetRecentFurniture[]>("/home", {
    //   params: { region, offset, limit },
    // });
    // return response.result;
    return exampleFurnitureData.slice(offset, limit);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get recent furniture");
  }
};

export default getRecentFurniture;
