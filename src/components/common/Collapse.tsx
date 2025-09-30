"use client";
import { useState, useRef, ReactNode } from "react";

type CollapseProps = {
  title: string;
  children: ReactNode;
};

export default function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border rounded-lg mb-2">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left font-medium"
      >
        {title}
        <span>{isOpen ? "−" : "+"}</span>
      </button>

      {/* Content with smooth height animation */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <div className="p-4 border-t">{children}</div>
      </div>
    </div>
  );
}
