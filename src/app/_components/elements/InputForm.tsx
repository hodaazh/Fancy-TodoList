import React, { FormEvent } from "react";
import cn from "classnames";

import { useTodoStore } from "@/store/todoStore";

const InputForm = ({
  input,
  setInput,
  openTextBox,
  setOpenTextBox,
}: IInputFormProps) => {
  const { addTodo, editTodo, deleteTaskId, taskId } = useTodoStore(
    (state) => state
  );

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      return;
    } else {
      if (taskId) {
        editTodo(taskId, input);
        deleteTaskId();
      } else {
        addTodo(input);
      }
    }
    setInput("");
    setOpenTextBox(false);
  };

  return (
    <form
      className={cn(
        "absolute bg-white left-0 h-20 w-full py-8 px-4 -top-full -translate-y-full opacity-100  rounded-3xl transition-all duration-1000 shadow-overlay z-10",
        {
          "opacity-100 top-0 translate-y-0 shadow-md": openTextBox,
        }
      )}
      onSubmit={handleSubmit}>
      <button
        type="button"
        className="w-8 h-8 bg-red-500 text-white rounded-lg shadow-addButton left-0"
        onClick={() => setOpenTextBox(false)}>
        -
      </button>
      <input
        value={input}
        className="outline-none pl-4"
        placeholder="Enter your new task"
        onChange={handleInput}
      />
    </form>
  );
};

export { InputForm };
