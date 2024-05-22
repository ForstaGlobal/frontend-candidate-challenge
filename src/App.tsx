import { useState } from "react";
import "./styles.scss";

export default function App() {
  const [todos] = useState([
    { text: "Buy milk", done: true },
    { text: "Buy bread", done: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
    </div>
  );
}
