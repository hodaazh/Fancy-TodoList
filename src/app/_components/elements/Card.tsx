import cn from "classnames";
import { useTodoStore } from "@/store/todoStore";

const Card = ({
  id,
  task,
  time,
  completed,
  setOpenTextBox,
  setInput,
}: ICardProps) => {
  const { deleteTodo, setTaskId, toggleTodo } = useTodoStore((state) => state);

  const handleDeleteTask = () => {
    deleteTodo(id);
  };
  const handleEditTask = () => {
    setOpenTextBox(true);
    setInput(task);
    setTaskId(id);
  };
  const handleCompeleteTask = () => {
    toggleTodo(id);
  };

  return (
    <li className="flex flex-row">
      <span className="text-blue-900 [writing-mode:vertical-lr] text-xs mr-2 -rotate-180 text-center font-bold transition-opacity duration-[0.4s]">
        {time}
      </span>
      <div
        className={`bg-blue-400 leading-[3.2rem] flex-column relative z-10 py-2 px-[0.7rem] rounded-[1.2rem] text-sm text-red-800 w-full left-0 overflow-hidden translate-y-0 translate-x-0`}>
        <span
          className={cn("font-semibold text-gray-800", {
            "line-through": completed,
          })}>
          {task}
        </span>

        <div className="absolute w-32 h-32 left-40 top-8 rounded-full bg-yellow-300 -z-10"></div>
        <div
          className="absolute cursor-pointer top-2 right-2 border border-black w-2 h-2 rounded-[50%] z-10"
          onClick={handleCompeleteTask}></div>
        <i
          className="icon-pencil cursor-pointer absolute top-2 right-8 z-10 text-black"
          onClick={handleEditTask}></i>
        <i
          className="icon-bin cursor-pointer absolute right-2 bottom-2 z-10 font-black"
          onClick={handleDeleteTask}></i>
      </div>
    </li>
  );
};

export { Card };
