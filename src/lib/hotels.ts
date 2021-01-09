import axios from 'axios';
import {APP_ID, BASE_URL} from "rakuten/config";
import {Hotels} from "types/hotels";

export const searchHotels = async (keyword: string, handleHotels: (hotels: Hotels) => void): Promise<void> => {
  try {
    const res = await axios.get(BASE_URL + '&applicationId=' + APP_ID + '&keyword=' + keyword)
    const hotels: Hotels = res.data.hotels
    handleHotels(hotels)
  } catch (e) {
    console.error(e)
  }
}