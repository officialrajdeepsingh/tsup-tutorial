import type { AddNum, AddString } from "./types";

export function Add(num: AddNum, num2: AddNum): AddNum {
  return num + num2;
}

export function ConCat(FirstItem: AddString, SecondItem: AddString): AddString {
  return FirstItem + SecondItem;
}
