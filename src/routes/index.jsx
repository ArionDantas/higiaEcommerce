// import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Medicamentos from "../components/Medicamentos/Medicamentos";
// import useAuth from "../hooks/useAuth";
// import Home from "../pages/Home";
// import Signin from "../pages/Signin";
// import Signup from "../pages/Signup";

// const Private = ({ Item }) => {
//   const { signed } = useAuth();

//   return signed > 0 ? <Item /> : <Signin />;
// };

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/medicamentos" element={<Medicamentos />} />
                <Route exact path="/dermocosmeticos" element={<Home />} />
                <Route exact path="/perfumaria" element={<Home />} />
                <Route exact path="/genericos" element={<Home />} />
                <Route exact path="/nutricao" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;
