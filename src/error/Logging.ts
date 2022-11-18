import pretty from "pretty";

export function LogError(message?: string, e?: Error) {
  console.log(message);
  if (e) {
    console.log(JSON.stringify(e, null, 2));
  }
}

export function debugMarkup(markup: string) {
  console.log(pretty(markup));
}
