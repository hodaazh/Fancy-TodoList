import cn from "classnames";

const Filtered = ({ setFilteredStatus, filterdStatus }: IFilteredProps) => {
  return (
    <div className="flex flex-row gap-x-2.5 m-3">
      <button
        className={cn("badge", { "bg-cyan-50": filterdStatus == "All" })}
        onClick={() => setFilteredStatus("All")}>
        All
      </button>
      <button
        className={cn("badge", { "bg-cyan-50": filterdStatus == "Completed" })}
        onClick={() => setFilteredStatus("Completed")}>
        Completed
      </button>
    </div>
  );
};

export { Filtered };
