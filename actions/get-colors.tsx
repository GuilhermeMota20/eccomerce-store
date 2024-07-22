import { Color } from "@/types";

const URL = `${process.env.NEXT_PULIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;