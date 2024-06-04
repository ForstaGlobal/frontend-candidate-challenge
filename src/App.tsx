import React, { useState, useEffect } from 'react';
import ToDoContainer from './components/ToDoContainer';
import './styles/styles.scss';

const App: React.FC = () => {
  const [colorTheme, setColorTheme] = useState<string>('theme-white');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('theme-color');
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  const handleClick = (theme: string) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  };

  return (
    <div className={`App ${colorTheme}`}>
      <div className="header">
        <div className="forsta-logo"></div>
        <div className="theme-options">
          <div
            id="theme-white"
            onClick={() => handleClick('theme-white')}
            className={colorTheme === 'theme-white' ? 'active' : ''}
          ></div>
          <div
            id="theme-blue"
            onClick={() => handleClick('theme-blue')}
            className={colorTheme === 'theme-blue' ? 'active' : ''}
          ></div>
          <div
            id="theme-orange"
            onClick={() => handleClick('theme-orange')}
            className={colorTheme === 'theme-orange' ? 'active' : ''}
          ></div>
          <div
            id="theme-purple"
            onClick={() => handleClick('theme-purple')}
            className={colorTheme === 'theme-purple' ? 'active' : ''}
          ></div>
          <div
            id="theme-green"
            onClick={() => handleClick('theme-green')}
            className={colorTheme === 'theme-green' ? 'active' : ''}
          ></div>
          <div
            id="theme-black"
            onClick={() => handleClick('theme-black')}
            className={colorTheme === 'theme-black' ? 'active' : ''}
          ></div>
        </div>
      </div>
      <div className="content-box">
        <div className="todoListApp">
          <ToDoContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
