import type { buttonType } from "./types";

export function Button(props: buttonType) {
  return (
    <button className="text-white bg-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
      {props.children}
    </button>
  );
}
