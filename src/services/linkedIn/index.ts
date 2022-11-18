import axios from "axios";
import { LogError } from "../../error/Logging";

export async function makeLinkedInSearch(url: string): Promise<string | null> {
  try {
    const response = await axios.get(url, {
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
