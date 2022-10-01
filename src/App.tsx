import React from 'react';

const App: React.FC = () => {

  return (
    <div className="App">
      <header style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <figure className='forsta-logo'></figure>
        <h1 className='uppercase'>Task tracker</h1>
      </header>
      
      <section className="tasks">
        <form className="tasks__form">
          <input className="tasks__form_field" type="text" name="task" id="task" />
          <button className="tasks__form_btn" type="submit">Add Task</button>
        </form>

        <section className="tasks__list">
          <ul>
            <li className="task">
              <div className="task__icon">x</div>
              <div className="task__description">description</div>
              <div className="task__icon">t</div>
            </li>

            <li className="task">
              <div className="task__icon">x</div>
              <div className="task__description">description</div>
              <div className="task__icon">t</div>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default App;