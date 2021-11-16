import { CategoryList } from "../components/categories/Categories";

export function getCategoryFromSearchParam(search) {
  const params = new URLSearchParams(search);
  const category = params.get("category") || "";

  if (!category) return;
  if (!CategoryList.hasOwnProperty(category)) throw Error("Wrong category");

  return category;
}


  return search.slice(index + 1);
}
