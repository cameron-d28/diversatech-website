"use client";

import { useRouter } from "next/navigation";
import React from "react";
import DownArrow from "./downarrow";
import { descriptions, pages } from "@/app/content/content";

interface HoverProps extends React.HTMLAttributes<HTMLDivElement> {
  color: string;
  page: string;
  arrow?: boolean;
  bottomContent?: boolean;
}

const Hover = ({ color, page, bottomContent, arrow, ...rest }: HoverProps) => {
  const router = useRouter();
  console.log(descriptions);
  console.log(pages);
  console.log(page);
  return (
    <div
      className={`w-full h-full z-10
      mb-8 py-8 px-4 space-y-8 
      rounded-xl
      ${
        page !== "DiversaTech"
          ? `hover:translate-y-2
          hover:bg-gradient-to-b from-light-blue to-transparent
          transition duration-300`
          : ""
      }
      
      `}
      onClick={() => router.push(`/pages?page=${page}`)}
      {...rest}
    >
      <p className="text-7xl">{page}</p>
      {/* Our goal is to change
        the ownership of consultancy. */}
      {descriptions && (
        <p className="text-3xl mt-4">
          {descriptions[page as keyof typeof descriptions]}
        </p>
      )}
      {arrow && <DownArrow />}
    </div>
  );
};

export default Hover;
