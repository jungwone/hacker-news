import { CategoryList } from "../components/categories/Categories";

export function getCategoryFromSearchParam(search) {
  const params = new URLSearchParams(search);
  const category = params.get("category") || "";

  if (!category) return;
  if (!CategoryList.hasOwnProperty(category)) throw Error("Wrong category");

  return category;
}

export function getPageNumerFromSearchParam(search) {
  const params = new URLSearchParams(search);
  const page = Number(params.get("page") || 1);
  return page;
}

export function getDateUsingTimeStamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  return ` ${year.toString()}-${month.toString()}-${day.toString()}`;
}
