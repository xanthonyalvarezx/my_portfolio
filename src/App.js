import  Landing  from "./components/Landing"
import  Projects  from "./components/Projects"
import  Contact  from "./components/Contact"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
       <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
