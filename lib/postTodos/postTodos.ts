import axios from "axios";

export const createNewTodo = async (
  title: string,
  body: string,
  userId: number
) => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
        userId,
      }
    );

    return data
  } catch (error) {
    throw new Error("Failed to create new todo")
  }
};
