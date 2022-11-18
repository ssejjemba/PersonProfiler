import axios from "axios";
import { LogError } from "../../error/Logging";

const GOOGLE_SEARCH_URL = "https://www.google.com/search";

export async function makeGoogleSearch(
  keyword: string
): Promise<string | null> {
  const url = new URL(GOOGLE_SEARCH_URL);
  url.searchParams.set("q", keyword);
  try {
    const response = await axios.get(url.toString(), {
      headers: {
        "Content-Type": "application/html",
      },
    });
    const { data } = response;
    return data;
  } catch (e) {
    LogError(`An error has occurred`, e as Error);
    return null;
  }
}
