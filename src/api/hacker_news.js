import axios from "axios";
const BASE_URL = "https://hacker-news.firebaseio.com/v0";

const api = axios.create({
  baseURL: BASE_URL,
});

export async function getPostsByCategory(category) {
  try {
    const response = await api.get(`${category}.json?print=pretty`);
    return response.data;
  } catch (error) {
    console.log("error occured");
  }
}

export async function getPostInfo(id) {
  try {
    const response = await api.get(`item/${id}.json?print=pretty`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
