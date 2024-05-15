// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contactsSlice";
// import { filtersReducer } from "./filtersSlice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filters: filtersReducer,
//   },
// });

import { createStore } from "redux";

export const addContact = (item) => {
  return {
    type: "items/addContact",
    payload: item,
  };
};

export const deleteContact = (item) => {
  return {
    type: "items/deleteContact",
    payload: item,
  };
};

export const changeFilter = (item) => {
  return {
    type: "items/changeFilter",
    payload: item,
  };
};

const initialState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};

export const selectName = (state) => state.filters.name;

const rootReducer = (state = initialState, action) => {
  //   console.log(action);
  switch (action.type) {
    case "items/addContact":
      return {
        contacts: {
          items: action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
