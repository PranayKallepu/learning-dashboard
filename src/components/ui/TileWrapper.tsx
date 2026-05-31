import { ReactNode } from "react";

interface TileWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function TileWrapper({
  children,
  className = "",
}: TileWrapperProps) {
  return (
    <article
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900/80
        backdrop-blur-sm
        p-6
        ${className}
      `}
    >
      {children}
    </article>
  );
}
