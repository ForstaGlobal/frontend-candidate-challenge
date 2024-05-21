import React from 'react';
import ToDoContainer from './components/ToDoContainer';
import './styles/styles.scss';


const App: React.FC = () => {
  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <ToDoContainer />
    </div>
  );
};

export default App;
