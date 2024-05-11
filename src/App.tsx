import TodoApp from "./components/Todo/TodoApp";
import "./styles/main.scss";

export default function App() {
  const Header = () => (
    <header>
      <div data-testid={"app_logo"} className="forsta-logo"></div>
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

  return (
    <>
      <Header />
      <IntroSection />
      <TodoApp />
    </>
  );
}
