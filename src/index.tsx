import { createRoot } from 'react-dom/client';
import React from "react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!); // createRoot(container!) if you use TypeScript
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);
