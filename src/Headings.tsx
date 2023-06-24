import type { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-5xl font-extrabold dark:text-white"> {children} </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-4xl font-extrabold dark:text-white">{children}</h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-3xl font-extrabold dark:text-white">{children}</h3>
  );
}
