export function H1({ text }: { text: string }) {
  return <h1 className="text-5xl font-extrabold dark:text-white"> {text} </h1>;
}

export function H2({ text }: { text: string }) {
  return <h2 className="text-4xl font-extrabold dark:text-white">{text}</h2>;
}

export function H3({ text }: { text: string }) {
  return <h3 className="text-3xl font-extrabold dark:text-white">{text}</h3>;
}
