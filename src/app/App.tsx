import AppRouter from "./AppRouter";
import "bootstrap-icons/font/bootstrap-icons.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
 export default function App() {
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}
