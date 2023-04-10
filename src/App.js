import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RoutesConfig from "./constants/RoutesConfig";

import "./styles/App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Navbar />}>
        {RoutesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
          </Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Dashboard from "./pages/Dashboard";
// import SignUp from "./pages/SignUp";

// import "./styles/App.css";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navbar />}>
//             <Route path="/" exact element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/sign-up" element={<SignUp />} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
