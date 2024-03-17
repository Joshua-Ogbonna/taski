declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

declare module "msm";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoDTO {
  title: string
  userId: string
  body: string
}

type loader = "fetching" | "creating"
