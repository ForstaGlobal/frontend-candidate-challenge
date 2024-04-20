import { TodoList } from "./components/TodoList";
import "./styles/main.scss";

export default function App() {
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

  return (
    <>
      <Header />
      <IntroSection />
      {/* TODO: Add Todo application */}
      <TodoList todos={[]} />
    </>
  );
}
