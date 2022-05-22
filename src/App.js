import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckLogIn } from "./components/CheckLogIn";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/redux_tasks/" element={<CheckLogIn />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
