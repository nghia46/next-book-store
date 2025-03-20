import { Book } from "../models/book";

export const getBooks = async (): Promise<{ data: Book[] }> => {
  const response = await fetch("https://66908754c0a7969efd9c5f4e.mockapi.io/books");
  const data = await response.json();
  return { data };
};
