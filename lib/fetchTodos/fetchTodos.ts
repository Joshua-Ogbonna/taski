import axios from "axios";

export const fetchTodos = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return (data as { data: Todo[] }).data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return [];
  }
};
