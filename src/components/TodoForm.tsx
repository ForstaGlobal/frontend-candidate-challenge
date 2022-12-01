
import React from "react"

function TodoForm(props: {
        todos: any[]; onAdd: (arg0: {
            // add 1 to current largest id
            id: number; text: string; done: boolean;
        }) => void;
    }) {
    const [formData, setFormData] = React.useState(
      {
        // add 1 to current largest id
        id: Math.max(...props.todos.map(val => val.id)) + 1,
        text: "",
        done: false
      }
    );

    function changeHandler(e: { target: { name: any; value: any; }; }) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitHandler(e: { preventDefault: () => void; }) {
      e.preventDefault();
      props.onAdd(formData);
      setFormData({ id: props.todos.length + 1, text: "", done: false});
    };

    return (
      <>
        <h1 style={{color: "darkslategray", fontSize: "30px"}}>
          Things to do today:
        </h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="text"
            placeholder="text"
            value={formData.text}
            onChange={changeHandler}
          />
          <button>Submit Todo</button>
        </form>
      </>
    );
  }

  export default TodoForm;