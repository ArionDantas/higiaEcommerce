import React from "react"
import Navbar from "../components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../components/Home/Home";
import Medicamentos from '../components/Medicamentos/Medicamentos'
import Dermocosmeticos from '../components/Dermocosmeticos/Dermocosmeticos'
import Perfumaria from "../components/Perfumaria/Perfumaria";
import Genericos from "../components/Genericos/Genericos";
import Nutricao from "../components/Nutricao/Nutricao";
import Cart from "../components/Cart/Cart";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import ProfileEdit from "../components/ProfileEdit/ProfileEdit";


function RoutesApp() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/conta" element={<Profile />} />
        <Route exact path="/conta/editar" element={<ProfileEdit />} />
        <Route exact path="/medicamentos" element={<Medicamentos />} />
        <Route exact path="/dermocosmeticos" element={<Dermocosmeticos />} />
        <Route exact path="/perfumaria" element={<Perfumaria />} />
        <Route exact path="/genericos" element={<Genericos />} />
        <Route exact path="/nutricao" element={<Nutricao />} />
        <Route exact path="/carrinho" element={<Cart />} />
        <Route exact path="/cadastro" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default RoutesApp
