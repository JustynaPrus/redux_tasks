import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckLogIn } from "./components/task_one/CheckLogIn";
import { NavigationMenu } from "./components/Navigation/NavigationMenu";
import { Table } from "./components/task_two/Table/Table";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/redux_tasks/" element={<NavigationMenu />} exact />
          <Route path="/redux_tasks/task_one" element={<CheckLogIn />} exact />
          <Route path="/redux_tasks/task_two" element={<Table />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
