import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Routine from "./pages/project-pages/Routine";
import SearchPage from "./pages/SearchPage";
import Syllabus from "./pages/project-pages/Syllabus";
import CoverpageGenerator from "./pages/project-pages/CoverpageGenerator/CoverpageGenerator";
import Text2Hw from "./pages/project-pages/Text2Hw/Text2Hw";
import rootBranch from "./components/variables/rootBranch";
import NotAvailable from "./pages/NotAvailable";
import NotePage from "./pages/NotePage";

const App = () => {
  return (
    <Router>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path={rootBranch} element={<SearchPage searchItem={""} />} />
        <Route
          path={rootBranch + "/projects"}
          element={<SearchPage searchItem={"project"} />}
        />
        <Route
          path={rootBranch + "/notes"}
          element={<SearchPage searchItem={"note"} />}
        />
        <Route path={rootBranch + "/routine"} element={<Routine />} />
        <Route
          path={rootBranch + "/search"}
          element={<SearchPage searchItem={""} />}
        ></Route>
        <Route path={rootBranch + "/syllabus"} element={<Syllabus />}></Route>
        <Route
          path={rootBranch + "/coverpage-generator"}
          element={<CoverpageGenerator />}
        ></Route>
        <Route path={rootBranch + "/text2hw"} element={<Text2Hw />}></Route>
        <Route
          path={rootBranch + "/note"}
          element={<NotePage noteId={""} />}
        ></Route>
        <Route path={rootBranch + "/na"} element={<NotAvailable />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
