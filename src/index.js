import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./reducers/index";
import { createBook } from "./actions/index";

const intialState = [
  {
    bookID: Math.floor(Math.random() * 1000),
    title: "guns and bullets",
    category: "Action",
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: "Nobody dies alone",
    category: "Sci-Fi",
  },
  {
    bookID: Math.floor(Math.random() * 1000),
    title: "mechanical thinking",
    category: "Learning",
  },
];

intialState.map((book) => store.dispatch(createBook(book)));

const jsx = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
