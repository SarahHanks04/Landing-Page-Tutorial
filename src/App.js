import "./App.css";
import Form from "./Components/Form";
// import Login from "./Components/Login";

// const isLoggedIn = false;

// const currentTime = new Date(2024, 7, 5, 12).getHours();
// console.log(currentTime);

const userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}

      {/* TENARY OPERATOR METHOD */}
      {/* {currentTime > 5 ? <h1>Why are you still working?</h1> : null} */}

      {/* AND(&& OPERATOR METHOD) */}
      {/* {currentTime > 5 && <h1>Why are you still working?</h1>} */}

      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
