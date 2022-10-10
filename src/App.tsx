import { Header, Tasks } from './components/index';

import React from 'react';

const App: React.FC = () => {

  return (
    <div className="App">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;