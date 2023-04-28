import "./app.css";
import questions from "./data";
import Toggle from "./Toggle";

function App() {

  return (
    <div className="main">
      <h3>
        Questions and Answers About Login
      </h3>
      <div className="accordions">
        {questions.map( (e)=> <Toggle e={e}/>)}
      </div>
    </div>
  );
}

export default App;
