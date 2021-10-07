import { POST } from "./types";

const initialState = [{ user: "ahmed" }];
export const postReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case POST:
      return actions.payload;

    default:
      return state;
  }
};
