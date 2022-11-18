import { debugMarkup, LogError } from "./error/Logging";
import { GoogleServices } from "./services";
import { extractLinks } from "./services/markup";

async function app() {
  const googlePageDOMString = await GoogleServices.search("Ssejjemba Daniel");
  if (!googlePageDOMString) {
    return;
  }
  try {
    const linksFromGoogle = extractLinks(googlePageDOMString);

    linksFromGoogle.forEach((link, index) => {
      console.log(`Link with index ${index}`, JSON.stringify(link, null, 2));
    });
  } catch (e) {
    LogError("An error when loading markup", e as Error);
  }
}

app();
