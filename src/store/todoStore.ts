import { create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
  time: string;
};

type TodoStore = {
  todos: Todo[];
  taskId: number | null;
  addTodo: (task: string) => void;
  editTodo: (id: number, newTask: string) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setTaskId: (taskId: number) => void;
  deleteTaskId: () => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      taskId: null,

      addTodo: (task) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              task,
              completed: false,
              time: `${new Date()
                .getHours()
                .toString()
                .padStart(2, "0")}:${new Date()
                .getMinutes()
                .toString()
                .padStart(2, "0")}`,
            },
          ],
        })),

      editTodo: (id, newTask) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  task: newTask,
                }
              : todo
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),

      setTaskId: (taskId: number) => set({ taskId }),

      deleteTaskId: () => set({ taskId: null }),
    }),
    {
      name: "todo-storage",
      storage: {
        getItem: (name) => {
          const value = localStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          localStorage.removeItem(name);
        },
      },
    }
  )
);
