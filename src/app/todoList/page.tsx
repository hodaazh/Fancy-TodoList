"use client";

import { useEffect, useState } from "react";

import Splash from "../_components/elements/Splash";
import { useTodoStore } from "@/store/todoStore";
import { Card } from "../_components/elements/Card";
import { Filtered } from "../_components/elements/Filtered";
import { InputForm } from "../_components/elements/InputForm";
import { Progressbar } from "../_components/elements/Progressbar";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [openTextBox, setOpenTextBox] = useState(false);
  const [filterdStatus, setFilteredStatus] = useState<"All" | "Completed">(
    "All"
  );
  const [showSplash, setShowSplash] = useState(true);

  const todos = useTodoStore((state) => state.todos);
  const [filterTodos, setFilterTodos] = useState(todos);

  useEffect(() => {
    const completedTasks = todos.filter((item) => item.completed);
    const filteredList = filterdStatus === "Completed" ? completedTasks : todos;
    setFilterTodos(filteredList);
    if (todos.length - completedTasks.length === 0) {
      setShowSplash(true);
    }
  }, [filterdStatus, todos]);

  const handlePerent = () => {
    const completedTasks = todos.filter((item) => item.completed);
    if (completedTasks.length > 0) {
      return (
        (todos.filter((item) => item.completed).length / todos.length) * 100
      );
    } else {
      return 0;
    }
  };

  const uncompletedTask = ` ${todos.filter((item) => item.completed).length}/${
    todos.length
  } `;

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50 ">
      <div className="flex flex-col h-[90vh] w-72 bg-white rounded-3xl pb-3 shadow-lg relative overflow-hidden">
        <InputForm {...{ input, setInput, openTextBox, setOpenTextBox }} />
        <header className="flex flex-col m-4 mb-8">
          <button
            className="w-8 h-8 bg-red-500 self-end text-white rounded-lg shadow-addButton"
            onClick={() => setOpenTextBox(true)}>
            +
          </button>
          <p className="font-bold text-2xl text-center my-4">Task Manager</p>
        </header>
        <div className="flex flex-row border border-gray-200 p-3 rounded-2xl m-3">
          <Progressbar percent={handlePerent} />
          <div className="flex flex-col justify-center ml-3 leading-none font-bold text-xs">
            <span>Daily progress</span>
            <span className="text-gray-700 text-xxs mt-2">
              <span className="text-sm">{uncompletedTask}</span> tasks done
            </span>
          </div>
        </div>
        <Filtered {...{ setFilteredStatus, filterdStatus }} />
        <div className="flex flex-1 flex-col overflow-y-auto px-4">
          <div className="flex flex-row mt-4 font-bold text-sm mb-3">
            <span>you have {filterTodos.length} tasks for today</span>
          </div>
          <ul className="flex flex-col gap-2">
            {filterTodos.map(({ id, task, completed, time }) => (
              <Card
                key={id}
                {...{ task, id, time, completed, setInput, setOpenTextBox }}
              />
            ))}
          </ul>
        </div>
        {<Splash {...{ showSplash, setShowSplash }} />}
      </div>
    </div>
  );
};

export default TodoList;
