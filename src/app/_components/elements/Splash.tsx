import cn from "classnames";

const Splash = ({ showSplash, setShowSplash }: ISplashProps) => {
  return (
    <div
      className={cn(
        "flex min-h-full w-full flex-col justify-center absolute bg-red-500 z-30 top-full -translate-y-full transition-all duration-1000",
        {
          "translate-y-0 ": !showSplash,
        }
      )}>
      <div className="flex flex-col justify-center font-bold relative flex-1 px-8 color-white">
        <h3>Greate job, my friend!</h3>
        <span>
          your tasks for today <br />
          are finished!
        </span>
        <div className="flex absolute items-center bottom-12">
          <button
            className="flex justify-center items-center w-10 h-10 rounded-2xl border  bg-white mr-4  cursor-pointer"
            onClick={() => setShowSplash(false)}>
            <i className="icon-cheveron-left text-xl" />
          </button>
          <span className="flex justify-center items-center py-4 bg-white  rounded-2xl font-bold text-sm px-8">
            Create another task
          </span>
        </div>
      </div>
    </div>
  );
};

export default Splash;
