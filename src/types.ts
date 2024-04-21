export type CategoryType = {
  color: string;
  label: string;
};

export type TaskType = {
  id: number;
  category: string;
  text: string;
  time: string;
  done: boolean;
};

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T[]>>;
export type SetStateTypeSingle<T> = React.Dispatch<React.SetStateAction<T>>;

export type AppContextType = {
  categories: CategoryType[];
  setCategories: SetStateType<CategoryType>;
  tasks: TaskType[];
  setTasks: SetStateType<TaskType>;
  showDoneTasks: boolean;
  setShowDoneTasks: SetStateTypeSingle<boolean>;
  filter: string | null;
  setFilter: SetStateTypeSingle<string | null>;
};

export type ServerMessage = {
  message: string;
};
