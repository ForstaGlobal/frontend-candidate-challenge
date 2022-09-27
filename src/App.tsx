import React, { useState } from "react";

import "./styles.scss";
import { ToDoView } from "./view/to-do/to-do.view";

export default function App() {

  return (
    <div className="todoListApp">
      <div className="logo-container"><div className="forsta-logo" /></div>
      <div style={{ height: 'calc(100% - 74px)' }}>
        <ToDoView />
      </div>
    </div>
  );
}
