import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import HomePage from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export default function AppRouter() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<AppLayout />}>
            <Route path="" element={<HomePage />} /> 
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }