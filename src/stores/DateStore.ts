import { atom, selector } from "recoil";

export const currentDateState = atom<Date>({
  key: "currentDateState",
  default: new Date(),
});

export const dateStringState = selector<string>({
  key: "dateStringState",
  get: ({ get }) => {
    return get(currentDateState).toDateString();
  },
});
