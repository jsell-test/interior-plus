import { getData } from ".";
import { GetRecentFurniture } from "../interfaces/RecentFurnitureInfo";

const getRecentFurniture = async (
  region: string
): Promise<GetRecentFurniture[]> => {
  try {
    const response = await getData<GetRecentFurniture[]>("/home", {
      params: { region },
    });
    return response.result;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get recent furniture");
  }
};

export default getRecentFurniture;
