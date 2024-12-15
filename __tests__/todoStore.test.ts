import { useTodoStore } from "@/store/todoStore";

describe("todoList", () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [], taskId: null });
  });

  test("add a new task", () => {
    useTodoStore.getState().addTodo("new task");

    const todos = useTodoStore.getState().todos;
    expect(todos).toHaveLength(1);
    expect(todos[0].task).toBe("new task");
  });

  test("should toggle todo completion", () => {
    useTodoStore.getState().addTodo("new task");

    const todoId = useTodoStore.getState().todos[0].id;

    useTodoStore.getState().toggleTodo(todoId);

    const todo = useTodoStore
      .getState()
      .todos.find((todo) => todo.id === todoId);
    expect(todo?.completed).toBe(true);
  });

  test("should edit a task", () => {
    useTodoStore.getState().addTodo("old task");

    const todoId = useTodoStore.getState().todos[0].id;

    useTodoStore.getState().editTodo(todoId, "updated task");

    const todo = useTodoStore
      .getState()
      .todos.find((todo) => todo.id === todoId);
    expect(todo?.task).toBe("updated task");
  });

  test("should delete a task", () => {
    useTodoStore.getState().addTodo("task to delete");

    const todoId = useTodoStore.getState().todos[0].id;

    useTodoStore.getState().deleteTodo(todoId);

    const todos = useTodoStore.getState().todos;
    expect(todos).toHaveLength(0);
  });
});
