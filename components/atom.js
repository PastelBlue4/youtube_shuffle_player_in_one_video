import { atom, selector } from "recoil";

export const videoLinkState = atom({
  key: "videoLinkStateKey",
  default: "",
});

export const logicAfterLinkState = atom({
  key: "logicAfterLinkStateKey",
  default: "",
});

export const playListState = atom({
  key: "playListStateKey",
  default: "",
});

// export const videoLinkStateSelector = selector({
//   key: "videoLinkStateSelceter",
//   get: ({ get }) => {
//     const link = get(videoLinkState);
//     return link;
//   },
//   set: ({ set }, newValue) => {
//     set(videoLinkState, newValue);
//     console.log(newValue);
//   },
// });
