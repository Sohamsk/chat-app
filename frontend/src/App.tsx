import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center">Message App</h1>
      <Link to="/message">Message</Link>
    </>
  );
}

export default App;
