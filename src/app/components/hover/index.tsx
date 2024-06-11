import React from "react";

interface HoverProps {
  color: string;
  page: string;
  bottomContent?: string | (() => JSX.Element);
}

const Hover = ({ color, page, bottomContent }: HoverProps) => {
  return (
    <div
      className={`w-full h-full ${color} 
      mb-8 py-8 px-4 space-y-8 
      rounded-xl
      hover:translate-y-2 transition-transform 
      duration-300
      `}
    >
      <p className="text-7xl">{page}</p>
      {bottomContent && typeof bottomContent === "function" ? (
        bottomContent()
      ) : (
        // <p className="text-3xl italic">{bottomContent}</p>
        <p className="text-3xl italic">
          our club is centered around xys ai waod kaojfdklashf ahs;dnfja
          e[nsfalksjdhfakfhak{" "}
        </p>
      )}
    </div>
  );
};

export default Hover;
