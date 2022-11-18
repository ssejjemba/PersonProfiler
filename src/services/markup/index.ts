import { load } from "cheerio";

export type LinksArray = Array<{ text: string; href?: string }>;

export function extractLinks(htmlString: string) {
  // Using cheerio to extract <a> tags
  const $ = load(htmlString);

  const linkObjects = $("a");
  // this is a mass object, not an array

  // Collect the "href" and "title" of each link and add them to an array
  const links: LinksArray = [];
  linkObjects.each((index, element) => {
    links.push({
      text: $(element).text(), // get the text
      href: $(element).attr("href"), // get the href attribute
    });
  });

  return links;
}
