const Progressbar = ({ percent }: { percent: () => number }) => {
  return (
    <div className="h-12 w-12 relative">
      <div className="circular shadow-outerProgress"></div>
      <div className="inner circular top-1/2 left-1/2 h-10 w-10 bg-slate-100 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-innerProgress"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-cyan-700 font-bold text-xs">
        {`${percent().toFixed()}%`}
      </div>
      <div className="circular z-[1] shadow-none">
        <div>
          <span></span>
        </div>
        <div
          className="progress"
          style={{ clipPath: "rect(0rem, 3rem, 3rem, 1.5rem)" }}>
          <div
            className="progress text-red-900"
            style={{ clipPath: "rect(0rem, 3rem, 3rem, 1.5rem)" }}></div>
        </div>
        <div className="progress rotate-180">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export { Progressbar };
