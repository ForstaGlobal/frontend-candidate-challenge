import React from "react";

import "./styles/main.scss";
import TodoApp from "./components/Todo/TodoApp";

const Header = () => (
  <header>
    <div className="forsta-logo"></div>
  </header>
);

const IntroSection = () => (
  <div className="intro">
    <h2>Hi there! Let's get something done.</h2>
    <p>
      <i>Organize your plans here.</i>
    </p>
  </div>
);

export default function App() {
  return (
    <>
      <Header />
      <IntroSection />
      <TodoApp />
    </>
  );
}
