import { PhotoI } from "../state/photoStore";

export const fetchPosts = (limit: number): Promise<any> => {
  return fetch(`https://jsonplaceholder.typicode.com/photos?_limit=` + limit);
};

export const fetchPost = (id: number) => {
  return fetch("https://jsonplaceholder.typicode.com/photos?id=" + id);
};
