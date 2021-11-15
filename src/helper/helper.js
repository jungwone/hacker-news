export function getCategoryFromSearchParam(search) {
  const index = search.indexOf("=");
  if (index < 0) throw Error("It's not right search string");

  return search.slice(index + 1);
}
