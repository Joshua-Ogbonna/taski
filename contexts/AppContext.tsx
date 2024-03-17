"use client";

import axios from "axios";
import { fetchTodos } from "lib/fetchTodos/fetchTodos";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
  KeyboardEvent,
  useEffect,
} from "react";

interface Props {
  todos: Todo[];
  currentItems: Todo[]
  fetchTodos: () => Promise<void>;
  postTodo: (e?: KeyboardEvent<HTMLInputElement>) => Promise<void>;
  todo: TodoDTO;
  setTodo: Dispatch<SetStateAction<TodoDTO>>;
  loader: loader | null;
  isInputActive: boolean;
  setIsInputActive: Dispatch<SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  currentPage: number
  handlePageChange: (pageNumber: number) => void
  totalPages: number
}

const ContextData = createContext<Props>({} as Props);

export const AppContext = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<TodoDTO>({
    title: "",
    body: "",
    userId: "",
  });
  const [loader, setLoader] = useState<loader | null>(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(todos.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scroll(0, 0);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = todos.slice(startIndex, endIndex);

  const getTodos = async () => {
    setLoader("fetching");
    try {
      const data: Todo[] = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(null);
    }
  };

  const handlePostTodo = async () => {
    setLoader("creating");
    try {
      await axios.post("https://jsonplaceholder.typicode.com/todos", {
        title: todo.title,
        body: todo.body,
        userId: todo.userId,
      });
      getTodos();
      setTodo({ title: "", body: "", userId: "" });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(null);
    }
  };

  const postTodo = async (e?: KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key == "Enter") {
      handlePostTodo();
    }
    handlePostTodo();
  };

  //   Search for todo
  const searchForTodo = () => {
    if (todos.length) {
      const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setTodos(filteredTodos);
    }

    if (searchQuery === "") {
      getTodos();
    }
  };

  useEffect(() => {
    searchForTodo();
  }, [searchQuery]);

  return (
    <ContextData.Provider
      value={{
        todos,
        fetchTodos: getTodos,
        postTodo,
        todo,
        setTodo,
        loader,
        isInputActive,
        setIsInputActive,
        searchQuery,
        setSearchQuery,
        currentPage,
        handlePageChange,
        totalPages,
        currentItems
      }}
    >
      {" "}
      {children}{" "}
    </ContextData.Provider>
  );
};

export const useAppContext = () => {
  const {
    todos,
    fetchTodos,
    postTodo,
    todo,
    setTodo,
    loader,
    isInputActive,
    setIsInputActive,
    searchQuery,
    setSearchQuery,
    currentPage,
    handlePageChange,
    totalPages,
    currentItems
  } = useContext(ContextData);

  return {
    todos,
    fetchTodos,
    postTodo,
    todo,
    setTodo,
    loader,
    isInputActive,
    setIsInputActive,
    searchQuery,
    setSearchQuery,
    currentPage,
    handlePageChange,
    totalPages,
    currentItems
  };
};
