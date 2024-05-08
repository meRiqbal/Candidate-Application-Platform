import "./App.css";
import Nav from "./components/Nav";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
// const Routing = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </>
//   );
// };
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Routing /> */}

      {/* <Footer /> */}
    </>
  );
}

export default App;
