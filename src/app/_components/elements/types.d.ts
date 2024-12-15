interface ICardProps {
  id: number;
  task: string;
  time: string;
  completed: boolean;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setOpenTextBox: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFilteredProps {
  filterdStatus: "All" | "Completed";
  setFilteredStatus: React.Dispatch<React.SetStateAction<"All" | "Completed">>;
}

interface IInputFormProps {
  input: string;
  openTextBox: boolean;
  setOpenTextBox: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

interface ISplashProps {
  showSplash: boolean;
  setShowSplash: React.Dispatch<React.SetStateAction<boolean>>;
}
