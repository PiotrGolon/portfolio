import React from "react";

const MagicButtonUseToCopy = ({
  children,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    // Button code
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-2 font-medium text-blue-100 transition-colors hover:scale-105 md:w-64 md:mt-10 mt-2 gap-2 ${otherClasses}`}
    >
      {position === "left" && icon}
      {children}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButtonUseToCopy;
