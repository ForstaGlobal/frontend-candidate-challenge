export interface TodoType {
    id: number;
    task: string;
    completed: boolean;
    category: string;
    description: string;
    color?: string;
    dueDate?: Date;
  }