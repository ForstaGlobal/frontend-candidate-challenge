import { ROUTES } from "./core/navigation/routes.enum";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./modules/home/pages/HomePage";
import { TodosPage } from "./modules/todos/pages/TodosPage";
import { Provider } from "react-redux";
import store from "./core/state/configureStore";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.TODOS} element={<TodosPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
